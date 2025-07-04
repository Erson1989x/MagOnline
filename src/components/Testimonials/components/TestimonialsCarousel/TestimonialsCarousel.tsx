
import DecorativeQuotes from '../DecorativeQuotes/DecorativeQuotes';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import NavigationArrows from '../NavigationArrows/NavigationArrows';


interface TestimonialsCarouselProps {
  testimonials: any[];
  activeIndex: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const TestimonialsCarousel = ({ 
  testimonials, 
  activeIndex, 
  handlePrevClick, 
  handleNextClick 
}: TestimonialsCarouselProps) => {
  return (
    <div className="relative max-w-4xl mx-auto z-10">
      <DecorativeQuotes />
      
      {/* Carousel */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10 overflow-hidden border border-gray-100">
        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeIndex === index}
            />
          ))}
        </div>
        
        <NavigationArrows 
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default TestimonialsCarousel;