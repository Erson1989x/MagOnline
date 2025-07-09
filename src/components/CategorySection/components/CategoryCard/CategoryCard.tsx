import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Subcategory } from '@/components/Navbar/types';

interface CategoryCardProps {
  category: Subcategory;
  categoryImage: { slug: string; image: string; color: string };
  index: number;
  hoveredCategory: string | null;
  onHover: (slug: string | null) => void;
}

const CategoryCard = ({ 
  category, 
  categoryImage, 
  index, 
  hoveredCategory, 
  onHover 
}: CategoryCardProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(category.slug)}
      onMouseLeave={() => onHover(null)}
    >
      <Link href={`/category/${category.slug}`} className="block">
        <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Category image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-black/80 mix-blend-multiply z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl z-5 group-hover:bg-indigo-400/20 transition-all duration-700"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl z-5 group-hover:bg-blue-400/20 transition-all duration-700"></div>
          <Image
            src={categoryImage.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Animated gradient border on hover */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
            style={{
              backgroundImage: `linear-gradient(45deg, ${hoveredCategory === category.slug ? '#6366f1, #3b82f6' : 'transparent'})`,
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
              animation: hoveredCategory === category.slug ? 'gradient-animation 3s ease infinite' : 'none'
            }}
          ></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300 flex items-center">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {category.name}
            </h3>
            
            <div className="flex items-center overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
              <span className="text-white/90 text-sm">Explorează produsele</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;