// src/components/HeroSection/components/NavigationControls/NavigationControls.tsx
interface NavigationControlsProps {
  currentSlide: number;
  slidesLength: number;
  handleDotClick: (index: number) => void;
}

const NavigationControls = ({ currentSlide, slidesLength, handleDotClick }: NavigationControlsProps) => {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-20">
      {/* Slide counter */}
      <div className="mb-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
        <span className="font-medium text-indigo-800">{currentSlide + 1}</span>
        <span className="text-gray-500"> / {slidesLength}</span>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center space-x-3">
        {[...Array(slidesLength)].map((_, index) => (
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
  );
};

export default NavigationControls;