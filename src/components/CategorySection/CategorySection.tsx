"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '../Navbar/data/categories';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explorează <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Categoriile Noastre</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descoperă gama noastră completă de produse pentru birou, școală și uz casnic
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => {
            const categoryImage = categoryImages.find(img => img.slug === category.slug) || categoryImages[index % categoryImages.length];
            
            return (
              <motion.div
                key={category.slug}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCategory(category.slug)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link href={`/category/${category.slug}`} className="block">
                  <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {/* Category image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90 mix-blend-multiply z-10"></div>
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
                        background: `linear-gradient(45deg, ${hoveredCategory === category.slug ? '#6366f1, #3b82f6' : 'transparent'})`,
                        backgroundSize: '200% 200%',
                        animation: hoveredCategory === category.slug ? 'gradient-animation 3s ease infinite' : 'none'
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
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
          })}
        </div>
        
        {/* AI Giftistry Special Section */}
        <motion.div 
          className="mt-16 relative overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold text-white mb-4">AI Giftistry</h3>
                <p className="text-white/90 mb-6 max-w-lg">
                  Descoperă noua noastră colecție de produse personalizate cu ajutorul inteligenței artificiale. 
                  De la agende și felicitări, până la căni și tricouri - toate cu design unic, generat special pentru tine.
                </p>
                <Link 
                  href="/ai-giftistry"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-600 font-medium transition-transform hover:scale-105 hover:shadow-lg"
                >
                  Descoperă colecția
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative h-60 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Image src="/HP 4.png" alt="AI Generated Product" fill className="object-cover" />
                    </div>
                    <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Image src="/HP 5.png" alt="AI Generated Product" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </motion.div>
      </div>
      
      {/* Add CSS for gradient animation */}
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
