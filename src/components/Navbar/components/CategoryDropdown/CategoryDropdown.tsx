import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Subcategory = {
  name: string;
  slug: string;
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
                <Link
                  key={subcategory.slug}
                  href={`/category/${subcategory.slug}`}
                  className="block py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-98 active:bg-indigo-100 my-1"
                  onClick={() => setCategoryDropdown("")}
                >
                  {subcategory.name}
                </Link>
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
  );
};

export default CategoryDropdown;