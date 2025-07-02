import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100/80 to-blue-100/80 py-2 px-4 text-sm hidden md:block transition-all duration-300">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors duration-200">
            <FiPhone size={14} /> 072 123 123
          </span>
          <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors duration-200">
            <FiMail size={14} /> contact@artima.ro
          </span>
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
  );
};

export default TopBar;