"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Subcategory } from '@/lib/types';

interface CategoryHeaderProps {
  category: Subcategory;
  subcategory?: Subcategory;
}

const CategoryHeader = ({ category, subcategory }: CategoryHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-4">
            <Link href="/" className="text-blue-100 hover:text-white transition-colors">
              Acasă
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/category/${category.slug}`} className="text-blue-100 hover:text-white transition-colors">
              {category.name}
            </Link>
            {subcategory && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white font-medium">
                  {subcategory.name}
                </span>
              </>
            )}
          </div>
          
          {/* Category Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {subcategory ? subcategory.name : category.name}
          </h1>
          
          {/* Category Description */}
          <p className="text-lg text-blue-100 max-w-3xl">
            {subcategory 
              ? `Descoperă gama noastră de ${subcategory.name.toLowerCase()} de înaltă calitate pentru toate nevoile tale.`
              : category.slug === 'hartie' 
                ? 'Descoperă gama noastră completă de produse din hârtie de înaltă calitate pentru toate nevoile tale de birou, școală sau proiecte creative.'
                : 'Explorează produsele noastre de calitate superioară pentru toate nevoile tale.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryHeader;
