"use client";
import { useState, useEffect, useRef } from "react";
import { categories } from "./data/categories";
import Logo from "./components/Logo/Logo";
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";
import UserActions from "./components/UserActions/UserActions";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Add scroll listener to enhance navbar appearance when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle clicks outside the navbar to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setCategoryDropdown("");
        setIsSearchOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleDropdown = (category: string) => {
    if (categoryDropdown === category) {
      setCategoryDropdown("");
    } else {
      setCategoryDropdown(category);
    }
  };

  return (
    <header 
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-indigo-50 to-blue-50 shadow-md'}`}
      role="navigation"
      aria-label="Main navigation"
    >
     {/* <TopBar /> */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNavigation 
            categories={categories}
            categoryDropdown={categoryDropdown}
            toggleDropdown={toggleDropdown}
            setCategoryDropdown={setCategoryDropdown}
          />
          <UserActions 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
        </div>
        <SearchPanel 
          isSearchOpen={isSearchOpen} 
        />
      </div>
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
        categoryDropdown={categoryDropdown}
        toggleDropdown={toggleDropdown}
        setCategoryDropdown={setCategoryDropdown}
      />
    </header>
  );
};

export default Navbar;