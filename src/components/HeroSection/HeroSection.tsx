"use client";
import { useState, useEffect } from 'react';
import { slides } from './data/slides';
import BackgroundElements from './components/BackgroundElements/BackgroundElements';
import SlideContent from './components/SlideContent/SlideContent';
import NavigationControls from './components/NavigationControls/NavigationControls';
import WaveDivider from './components/WaveDivider/WaveDivider';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <BackgroundElements />
      
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <SlideContent 
            key={index}
            slide={slide}
            index={index}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      
      <NavigationControls 
        currentSlide={currentSlide}
        slidesLength={slides.length}
        handleDotClick={handleDotClick}
      />
      
      <WaveDivider />
    </section>
  );
};

export default HeroSection;