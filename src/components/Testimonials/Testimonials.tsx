"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Manager Achiziții',
    company: 'Tech Solutions SRL',
    image: '/HP 1.png',
    content: 'Artima a devenit furnizorul nostru principal pentru toate produsele de birotică. Calitatea produselor și promptitudinea livrărilor ne-au convins să continuăm colaborarea pe termen lung.',
    rating: 5
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    role: 'Director General',
    company: 'Ionescu & Partners',
    image: '/HP 2.png',
    content: 'Serviciile de personalizare AI oferite de Artima sunt extraordinare! Am comandat agende personalizate pentru toți angajații noștri și rezultatul a fost impresionant.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    role: 'Profesor',
    company: 'Liceul Teoretic "Ion Creangă"',
    image: '/HP 3.png',
    content: 'Recomand cu încredere Artima pentru rechizitele școlare. Raportul calitate-preț este excelent, iar copiii sunt încântați de produsele primite.',
    rating: 4
  },
  {
    id: 4,
    name: 'Mihai Stancu',
    role: 'Antreprenor',
    company: 'Creative Studio',
    image: '/HP 4.png',
    content: 'Am apelat la Artima pentru cadourile corporate de final de an și am fost plăcut surprins de varietatea de opțiuni și de calitatea produselor personalizate.',
    rating: 5
  },
  {
    id: 5,
    name: 'Andreea Marin',
    role: 'Office Manager',
    company: 'Global Consulting',
    image: '/HP 5.png',
    content: 'Colaborarea cu Artima a fost mereu una plăcută. Produsele sunt livrate la timp, iar serviciul clienți este mereu prompt și amabil.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false); // Pause autoplay when manually navigating
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  const handleNextClick = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-indigo-100/50 blur-3xl"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experiențe Reale
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ce Spun <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Clienții Noștri</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descoperă experiențele clienților noștri cu produsele și serviciile Artima
          </motion.p>
        </div>
        
        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto z-10">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 text-indigo-600 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-12 h-12 text-indigo-600 opacity-20 transform rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          {/* Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10 overflow-hidden border border-gray-100">
            {/* Decorative quote marks */}
            <div className="absolute top-0 left-0 w-24 h-24 text-indigo-100 transform -translate-x-1/3 -translate-y-1/3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 text-indigo-100 transform translate-x-1/3 translate-y-1/3 rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="relative h-[300px] md:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 100,
                    zIndex: activeIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Client image */}
                  <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="w-full md:w-3/4 md:pl-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 italic mb-4 relative">
                      <span className="text-indigo-400 text-3xl absolute -left-2 -top-2">&ldquo;</span>
                      {testimonial.content}
                      <span className="text-indigo-400 text-3xl absolute -right-1 -bottom-2">&rdquo;</span>
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-6">
              <button 
                onClick={handlePrevClick}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button 
                onClick={handleNextClick}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation dots with counter */}
          <div className="flex flex-col items-center mt-6">
            <div className="mb-3 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
              <span className="font-medium text-indigo-800">{activeIndex + 1}</span>
              <span className="text-gray-500"> / {testimonials.length}</span>
            </div>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 w-8 shadow-sm' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
