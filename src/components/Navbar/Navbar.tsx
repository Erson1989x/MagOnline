"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import logo from "../../../public/next.svg";

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

  const categories = [
    {
      name: "PRODUSE",
      subcategories: [
        { name: "HÂRTIE, PRODUSE DIN HÂRTIE", slug: "hartie" },
        { name: "BIROU, ORGANIZARE ȘI ARHIVARE", slug: "birou" },
        { name: "AFIȘARE ȘI PREZENTARE", slug: "afisare" },
        { name: "INSTRUMENTE DE SCRIS", slug: "instrumente-scris" },
        { name: "ACCESORII IT", slug: "accesorii-it" },
        { name: "CURĂȚENIE ȘI PROTOCOL", slug: "curatenie" },
        { name: "RECHIZITE ȘCOLARE", slug: "rechizite" },
        { name: "CADOURI", slug: "cadouri" },
      ],
    },
    {
      name: "BRANDURI",
      subcategories: [
        { name: "PARKER", slug: "parker" },
        { name: "DACO", slug: "daco" },
        { name: "HERLITZ", slug: "herlitz" },
      ],
    },
  ];

  return (
    <header 
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-indigo-50 to-blue-50 shadow-md'}`}
      role="navigation"
      aria-label="Main navigation">
      <div className="bg-gradient-to-r from-indigo-100/80 to-blue-100/80 py-2 px-4 text-sm hidden md:block transition-all duration-300">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors duration-200"><FiPhone size={14} /> 0745 123 456</span>
            <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors duration-200"><FiMail size={14} /> contact@bravart.ro</span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" className="hover:text-blue-600 transition-colors duration-200 p-1.5 hover:bg-blue-50 rounded-full">
              <FaFacebookF size={16} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-600 transition-colors duration-200 p-1.5 hover:bg-pink-50 rounded-full">
              <FaInstagram size={16} />
            </a>
            <a href="https://tiktok.com" className="hover:text-black transition-colors duration-200 p-1.5 hover:bg-gray-100 rounded-full">
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-12 w-12 relative mr-3 bg-white/50 rounded-full p-1 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <Image
                src={logo}
                alt=""
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-blue-500">BravArt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Acasă
            </Link>
            {categories.map((category) => (
              <div className="relative group" key={category.name}>
                <button
                  className="text-gray-700 hover:text-indigo-600 font-medium flex items-center transition-colors duration-300"
                  onClick={() => toggleDropdown(category.name)}
                  aria-expanded={categoryDropdown === category.name}
                  aria-controls={`dropdown-${category.name}`}
                  aria-haspopup="true"
                >
                  {category.name}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <AnimatePresence>
                  {categoryDropdown === category.name && (
                    <motion.div
                      id={`dropdown-${category.name}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm border border-gray-200/70 shadow-xl rounded-lg py-2 z-50"
                    >
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/category/${subcategory.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 transition-all duration-200 rounded-md mx-1"
                        onClick={() => setCategoryDropdown("")}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              href="/ai-giftistry"
              className="text-indigo-600 hover:text-indigo-800 font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              AI Giftistry
            </Link>

            <Link
              href="/despre-noi"
              className="text-gray-700 hover:text-indigo-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Despre Noi
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* Search, Cart and User actions */}
          <div className="flex items-center space-x-4">
            {/* Search toggle */}
            <button
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 hover:scale-110 transform p-1.5 rounded-full hover:bg-indigo-50"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-expanded={isSearchOpen}
              aria-controls="search-panel"
              aria-label="Search"
            >
              <FiSearch size={20} className="transform hover:rotate-12 transition-transform duration-300" />
            </button>

            {/* User account */}
            <Link
              href="/account"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 hover:scale-110 transform p-1.5 rounded-full hover:bg-indigo-50"
            >
              <FiUser size={20} className="transform hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-indigo-600 relative transition-colors duration-300 hover:scale-110 transform p-1.5 rounded-full hover:bg-indigo-50"
            >
              <FiShoppingCart size={20} className="transform hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm animate-pulse">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300 hover:scale-110 transform p-1.5 rounded-full hover:bg-indigo-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {/* Search bar (expandable) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              id="search-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4"
            >
            <form className="flex w-full">
              <input
                type="text"
                placeholder="Caută produse..."
                className="flex-grow px-4 py-3 border border-gray-300/70 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-3 rounded-r-md hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FiSearch size={20} className="animate-pulse" />
              </button>
            </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0.95, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-inner"
          >
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              Acasă
            </Link>
            {categories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex justify-between items-center w-full py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100"
                  onClick={() => toggleDropdown(category.name)}
                  aria-expanded={categoryDropdown === category.name}
                  aria-controls={`mobile-dropdown-${category.name}`}
                  aria-haspopup="true"
                >
                  <span>{category.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      categoryDropdown === category.name
                        ? "transform rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {categoryDropdown === category.name && (
                    <motion.div 
                      id={`mobile-dropdown-${category.name}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 mt-1 mb-2 overflow-hidden">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/category/${subcategory.slug}`}
                        className="block py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100 my-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/ai-giftistry"
              className="block py-3 px-4 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:text-indigo-800 font-semibold rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-200 border border-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              AI Giftistry
            </Link>
            <Link
              href="/despre-noi"
              className="block py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>

            <Link
              href="/contact"
              className="block py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
