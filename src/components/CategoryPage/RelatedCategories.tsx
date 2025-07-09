"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/components/Navbar/data/categories';

interface RelatedCategoriesProps {
  currentCategorySlug: string;
}

const RelatedCategories = ({ currentCategorySlug }: RelatedCategoriesProps) => {
  // Get all categories
  const allCategories = categories.flatMap(group => group.subcategories);
  
  // Filter out the current category
  const relatedCategories = allCategories.filter(cat => cat.slug !== currentCategorySlug);
  
  // For "hartie" category, show specific related categories that make sense
  const displayCategories = currentCategorySlug === 'hartie' 
    ? relatedCategories.filter(cat => 
        ['birou', 'instrumente-scris', 'rechizite'].includes(cat.slug)
      ).slice(0, 3) 
    : relatedCategories.slice(0, 3);
  
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Categorii similare</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayCategories.map((category, index) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link 
              href={`/category/${category.slug}`}
              className="block bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{category.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCategories;
