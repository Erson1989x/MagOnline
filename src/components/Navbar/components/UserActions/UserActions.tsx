import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

type UserActionsProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isSearchOpen: boolean) => void;
};

const UserActions = ({
  isOpen,
  setIsOpen,
  isSearchOpen,
  setIsSearchOpen
}: UserActionsProps) => {
  return (
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
      
      {/* Shopping cart */}
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
  );
};

export default UserActions;