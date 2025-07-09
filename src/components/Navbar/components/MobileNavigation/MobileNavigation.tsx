import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

type Subcategory = {
  name: string;
  slug: string;
};

type Category = {
  name: string;
  subcategories: Subcategory[];
};

type MobileNavigationProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  categories: Category[];
  categoryDropdown: string;
  toggleDropdown: (category: string) => void;
  setCategoryDropdown: (category: string) => void;
};

const MobileNavigation = ({
  isOpen,
  setIsOpen,
  categories,
  categoryDropdown,
  toggleDropdown,
  setCategoryDropdown
}: MobileNavigationProps) => {
  return (
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
              <CategoryDropdown
                key={category.name}
                category={category}
                categoryDropdown={categoryDropdown}
                toggleDropdown={toggleDropdown}
                setCategoryDropdown={setCategoryDropdown}
                isMobile={true}
              />
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
  );
};

export default MobileNavigation;