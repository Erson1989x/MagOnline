import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Subcategory = {
  name: string;
  slug: string;
  subcategories?: Subcategory[];
};

type CategoryDropdownProps = {
  category: {
    name: string;
    subcategories: Subcategory[];
  };
  categoryDropdown: string;
  toggleDropdown: (category: string) => void;
  setCategoryDropdown: (category: string) => void;
  isMobile?: boolean;
};

const CategoryDropdown = ({
  category,
  categoryDropdown,
  toggleDropdown,
  setCategoryDropdown,
  isMobile = false
}: CategoryDropdownProps) => {
  // Track which subcategories are expanded
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});
  
  // Toggle subcategory expansion
  const toggleSubcategory = (slug: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setExpandedSubcategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };
  
  if (isMobile) {
    return (
      <div>
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
              categoryDropdown === category.name ? "transform rotate-180" : ""
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
              className="pl-4 space-y-1 mt-1 mb-2 overflow-hidden"
            >
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.slug}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/category/${subcategory.slug}`}
                      className="flex-grow py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100 my-1"
                      onClick={() => setCategoryDropdown("")}
                    >
                      {subcategory.name}
                    </Link>
                    
                    {/* Chevron for subcategories if they exist */}
                    {subcategory.subcategories && subcategory.subcategories.length > 0 && (
                      <button 
                        onClick={(e) => toggleSubcategory(subcategory.slug, e)}
                        className="px-3 py-3 text-gray-500 hover:text-indigo-600 transition-colors"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${expandedSubcategories[subcategory.slug] ? 'transform rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Render subcategories if they exist and are expanded */}
                  {subcategory.subcategories && subcategory.subcategories.length > 0 && expandedSubcategories[subcategory.slug] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 border-l border-gray-200 ml-6 mt-1 mb-2 overflow-hidden"
                    >
                      {subcategory.subcategories.map((subsubcategory) => (
                        <Link
                          key={subsubcategory.slug}
                          href={`/category/${subcategory.slug}/${subsubcategory.slug}`}
                          className="block py-2 px-4 text-sm text-gray-500 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100 my-1"
                          onClick={() => setCategoryDropdown("")}
                        >
                          {subsubcategory.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative group">
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
              <div key={subcategory.slug}>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/category/${subcategory.slug}`}
                    className="block flex-grow px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 transition-all duration-200 rounded-md mx-1"
                    onClick={() => setCategoryDropdown("")}
                  >
                    {subcategory.name}
                  </Link>
                  
                  {/* Chevron for subcategories if they exist */}
                  {subcategory.subcategories && subcategory.subcategories.length > 0 && (
                    <button 
                      onClick={(e) => toggleSubcategory(subcategory.slug, e)}
                      className="px-2 py-2 text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${expandedSubcategories[subcategory.slug] ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Render subcategories if they exist and are expanded */}
                {subcategory.subcategories && subcategory.subcategories.length > 0 && expandedSubcategories[subcategory.slug] && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 border-l border-gray-100 ml-4 mt-1 mb-2 overflow-hidden"
                  >
                    {subcategory.subcategories.map((subsubcategory) => (
                      <Link
                        key={subsubcategory.slug}
                        href={`/category/${subcategory.slug}/${subsubcategory.slug}`}
                        className="block px-4 py-1.5 text-xs text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 transition-all duration-200 rounded-md mx-1"
                        onClick={() => setCategoryDropdown("")}
                      >
                        {subsubcategory.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;