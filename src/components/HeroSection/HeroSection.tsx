"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HP1 from "../../../public/HP1.png"
import HP2 from "../../../public/HP2.png"
import HP3 from "../../../public/HP3.png"
import HP4 from "../../../public/HP4.png"


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Partenerul tău pentru ordine, ritm și eficiență",
      description: "Descoperă produsele esențiale pentru birou, școală sau uz casnic",
      image: HP1,
      cta: "Explorează produsele",
      link: "/produse"
    },
    {
      title: "Soluții complete de papetărie și birotică",
      description: "De la hârtie și instrumente de scris până la organizare și arhivare",
      image: HP2,
      cta: "Vezi categoriile",
      link: "/categorii"
    },
    {
      title: "Cadouri business personalizate",
      description: "Impresionează-ți partenerii cu cadouri elegante și utile",
      image: HP3,
      cta: "Descoperă colecția",
      link: "/cadouri"
    },
    {
      title: "Cadouri business personalizate",
      description: "Impresionează-ți partenerii cu cadouri elegante și utile",
      image: HP4,
      cta: "Descoperă colecția",
      link: "/cadouri"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[550px] md:h-[650px] overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100">
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
      
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              x: currentSlide === index ? 0 : 100,
              zIndex: currentSlide === index ? 10 : 0
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-6 md:mb-0">
              <motion.span 
                className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Artima Collection
              </motion.span>
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-lg mb-6 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {slide.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={slide.link}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg group"
                  >
                    {slide.cta}
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
            </div>
            
            {/* Image */}
            <motion.div 
              className="w-full md:w-1/2 relative h-[250px] md:h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, scale: currentSlide === index ? 1 : 0.9 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Main container with image and overlay */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* The actual image centered in the middle */}
                    <div className="relative w-full h-full z-10">
                      <Image
                        src={slide.image}
                        alt={slide.title}
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
                     {/* <div className="absolute top-1/4 -left-5 w-20 h-20 rounded-full bg-indigo-200/50 blur-md"></div>
                      <div className="absolute bottom-1/3 -right-5 w-16 h-16 rounded-full bg-blue-200/50 blur-md"></div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-20">
        {/* Slide counter */}
        <div className="mb-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
          <span className="font-medium text-indigo-800">{currentSlide + 1}</span>
          <span className="text-gray-500"> / {slides.length}</span>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-indigo-600 w-8 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Wave divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-white"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
