// src/components/HeroSection/components/ActionButtons/ActionButtons.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ActionButtonsProps {
  cta: string;
  link: string;
  isActive: boolean;
}

const ActionButtons = ({ cta, link, isActive }: ActionButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href={link}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg group"
        >
          {cta}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium transition-all hover:bg-indigo-50 hover:shadow-md"
        >
          Contactează-ne
        </Link>
      </div>
    </motion.div>
  );
};

export default ActionButtons;