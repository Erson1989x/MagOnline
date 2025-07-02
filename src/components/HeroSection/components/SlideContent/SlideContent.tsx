// src/components/HeroSection/components/SlideContent/SlideContent.tsx
import { motion } from 'framer-motion';
import SlideTextContent from '../SlideTextContent/SlideTextContent';
import SlideImage from '../SlideImage/SlideImage';
import { StaticImageData } from 'next/image';

interface SlideContentProps {
  slide: {
    title: string;
    description: string;
    link: string;
    cta: string;
    image: string | StaticImageData;
  };
  index: number;
  isActive: boolean;
}

const SlideContent = ({ slide, index, isActive }: SlideContentProps) => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 100,
        zIndex: isActive ? 10 : 0
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <SlideTextContent 
        slide={slide}
        index={index}
        isActive={isActive}
      />
      
      <SlideImage 
        image={slide.image}
        title={slide.title}
        index={index}
        isActive={isActive}
      />
    </motion.div>
  );
};

export default SlideContent;