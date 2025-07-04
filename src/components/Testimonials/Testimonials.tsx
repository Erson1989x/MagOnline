"use client";
import { useState, useEffect } from 'react';
import { testimonials } from './data/testimonials';
import SectionHeader from './components/SectionHeader/SectionHeader';
import BackgroundElements from './components/BackgroundElements/BackgroundElements';
import TestimonialsCarousel from './components/TestimonialsCarousel/TestimonialsCarousel';
import NavigationDots from './components/NavigationDots/NavigationDots';

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
    setAutoplay(false);
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
      <BackgroundElements />
      <div className="container mx-auto px-4">
        <SectionHeader />
        <TestimonialsCarousel 
          testimonials={testimonials}
          activeIndex={activeIndex}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <NavigationDots 
          testimonials={testimonials}
          activeIndex={activeIndex}
          handleDotClick={handleDotClick}
        />
      </div>
    </section>
  );
};

export default Testimonials;