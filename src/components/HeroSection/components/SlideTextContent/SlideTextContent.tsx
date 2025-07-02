// src/components/HeroSection/components/SlideTextContent/SlideTextContent.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import ActionButtons from '../ActionButtons/ActionButtons';

interface SlideTextContentProps {
  slide: {
    title: string;
    description: string;
    link: string;
    cta: string;
  };
  index: number;
  isActive: boolean;
}

const SlideTextContent = ({ slide, index, isActive }: SlideTextContentProps) => {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-6 md:mb-0">
      <motion.span 
        className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Artima Collection
      </motion.span>
      
      <motion.h1 
        className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {slide.title}
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 text-lg mb-6 max-w-lg mx-auto md:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {slide.description}
      </motion.p>
      
      <ActionButtons 
        cta={slide.cta}
        link={slide.link}
        isActive={isActive}
      />
    </div>
  );
};

export default SlideTextContent;