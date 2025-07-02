// src/components/HeroSection/components/BackgroundElements/BackgroundElements.tsx
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-indigo-300/20 blur-3xl"
          style={{ top: '10%', left: '5%' }}
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-300/10 blur-3xl"
          style={{ bottom: '5%', right: '10%' }}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>
    </>
  );
};

export default BackgroundElements;