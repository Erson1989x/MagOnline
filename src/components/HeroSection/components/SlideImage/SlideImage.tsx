// src/components/HeroSection/components/SlideImage/SlideImage.tsx
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SlideImageProps {
  image: string | StaticImageData;
  title: string;
  index: number;
  isActive: boolean;
}

const SlideImage = ({ image, title, index, isActive }: SlideImageProps) => {
  return (
    <motion.div 
      className="w-full md:w-1/2 relative h-[250px] md:h-[400px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-md">
          {/* Main container with image and overlay */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The actual image centered in the middle */}
            <div className="relative w-full h-full z-10">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
            
            {/* Decorative elements as overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
              {/* Main glow effect bubble */}
              {/*<div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30 blur-2xl rounded-full shadow-[0_0_30px_15px_rgba(99,102,241,0.3)]"></div>*/}
              
              {/* Additional small decorative bubbles */}
              {/*<div className="absolute top-1/4 -left-5 w-20 h-20 rounded-full bg-indigo-200/50 blur-md"></div>
              <div className="absolute bottom-1/3 -right-5 w-16 h-16 rounded-full bg-blue-200/50 blur-md"></div>*/}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SlideImage;