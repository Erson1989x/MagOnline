"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState("");

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-100 py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <span>📞 0745 123 456</span>
            <span>✉️ contact@bravart.ro</span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" className="hover:text-blue-600">
              Facebook
            </a>
            <a href="https://instagram.com" className="hover:text-pink-600">
              Instagram
            </a>
            <a href="https://tiktok.com" className="hover:text-black">
              TikTok
            </a>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 relative mr-2">
              <Image
                src="/logo.png"
                alt="BravArt Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-800">BravArt</span>
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
                  className="text-gray-700 hover:text-indigo-600 font-medium flex items-center"
                  onClick={() => toggleDropdown(category.name)}
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
                {categoryDropdown === category.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50"
                  >
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/category/${subcategory.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => setCategoryDropdown("")}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/ai-giftistry"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              AI Giftistry
            </Link>

            <Link
              href="/despre-noi"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Despre Noi
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Search, Cart and User actions */}
          <div className="flex items-center space-x-4">
            {/* Search toggle */}
            <button
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch size={20} />
            </button>

            {/* User account */}
            <Link
              href="/account"
              className="text-gray-700 hover:text-indigo-600"
            >
              <FiUser size={20} />
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-indigo-600 relative"
            >
              <FiShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {/* Search bar (expandable) */}
        {isSearchOpen && (
          <motion.div
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
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors duration-300"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0.95, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Acasă
            </Link>
            {categories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex justify-between items-center w-full py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                  onClick={() => toggleDropdown(category.name)}
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
                {categoryDropdown === category.name && (
                  <div className="pl-4 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/category/${subcategory.slug}`}
                        className="block py-2 px-4 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/ai-giftistry"
              className="block py-2 px-4 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 font-semibold rounded-md"
              onClick={() => setIsOpen(false)}
            >
              AI Giftistry
            </Link>
            <Link
              href="/despre-noi"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>

            <Link
              href="/contact"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
