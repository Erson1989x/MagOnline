"use client";
import { useState } from 'react';
import { categories } from '../Navbar/data/categories';
import BackgroundElements from './components/BackgroundElements/BackgroundElements';
import SectionHeader from './components/SectionHeader/SectionHeader';
import CategoryCard from './components/CategoryCard/CategoryCard';
import AIGiftistrySection from './components/AIGiftistrySection/AIGiftistrySection';

const categoryImages = [
  { slug: 'hartie', image: '/HP 1.png', color: 'from-blue-500 to-indigo-600' },
  { slug: 'birou', image: '/HP 2.png', color: 'from-indigo-500 to-purple-600' },
  { slug: 'afisare', image: '/HP 3.png', color: 'from-purple-500 to-pink-600' },
  { slug: 'instrumente-scris', image: '/HP 4.png', color: 'from-pink-500 to-red-600' },
  { slug: 'accesorii-it', image: '/HP 5.png', color: 'from-red-500 to-orange-600' },
  { slug: 'curatenie', image: '/HP 1.png', color: 'from-orange-500 to-yellow-600' },
  { slug: 'rechizite', image: '/HP 2.png', color: 'from-yellow-500 to-green-600' },
  { slug: 'cadouri', image: '/HP 3.png', color: 'from-green-500 to-teal-600' },
];

const CategorySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Get the product categories from the first category group
  const productCategories = categories[0].subcategories;
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <BackgroundElements />
      
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {productCategories.map((category, index) => {
            const categoryImage = categoryImages.find(img => img.slug === category.slug) || 
                                 categoryImages[index % categoryImages.length];
            
            return (
              <CategoryCard 
                key={category.slug}
                category={category}
                categoryImage={categoryImage}
                index={index}
                hoveredCategory={hoveredCategory}
                onHover={setHoveredCategory}
              />
            );
          })}
        </div>
        
        <AIGiftistrySection />
      </div>
      
      <style jsx global>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default CategorySection;
