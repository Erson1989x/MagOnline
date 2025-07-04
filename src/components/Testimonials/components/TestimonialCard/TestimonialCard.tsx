
import { motion } from 'framer-motion';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
  };
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 100,
        zIndex: isActive ? 10 : 0
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
        <StarRating rating={testimonial.rating} />
        
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
  );
};

export default TestimonialCard;