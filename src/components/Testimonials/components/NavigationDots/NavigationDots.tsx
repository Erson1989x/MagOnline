
interface NavigationDotsProps {
  testimonials: any[];
  activeIndex: number;
  handleDotClick: (index: number) => void;
}

const NavigationDots = ({ testimonials, activeIndex, handleDotClick }: NavigationDotsProps) => {
  return (
    <div className="flex flex-col items-center mt-6">
      {/* Counter display */}
      <div className="mb-3 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
        <span className="font-medium text-indigo-800">{activeIndex + 1}</span>
        <span className="text-gray-500"> / {testimonials.length}</span>
      </div>
      
      {/* Dot navigation */}
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
  );
};

export default NavigationDots;