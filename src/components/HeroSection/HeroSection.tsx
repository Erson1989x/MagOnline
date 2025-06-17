"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Partenerul tău pentru ordine, ritm și eficiență",
      description: "Descoperă produsele esențiale pentru birou, școală sau uz casnic",
      image: "/HP 1.png",
      cta: "Explorează produsele",
      link: "/produse"
    },
    {
      title: "Soluții complete de papetărie și birotică",
      description: "De la hârtie și instrumente de scris până la organizare și arhivare",
      image: "/HP 2.png",
      cta: "Vezi categoriile",
      link: "/categorii"
    },
    {
      title: "Cadouri business personalizate",
      description: "Impresionează-ți partenerii cu cadouri elegante și utile",
      image: "/HP 3.png",
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
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
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
                <Link 
                  href={slide.link}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg"
                >
                  {slide.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
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
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-indigo-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
