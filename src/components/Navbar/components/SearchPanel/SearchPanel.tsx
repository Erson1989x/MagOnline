import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";

type SearchPanelProps = {
  isSearchOpen: boolean;
};

const SearchPanel = ({ isSearchOpen }: SearchPanelProps) => {
  return (
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
  );
};

export default SearchPanel;