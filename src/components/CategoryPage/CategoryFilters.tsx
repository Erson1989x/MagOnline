"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/components/Navbar/data/categories';
import Link from 'next/link';

interface CategoryFiltersProps {
  categorySlug: string;
  subcategorySlug?: string;
}

const CategoryFilters = ({ categorySlug, subcategorySlug }: CategoryFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    subcategories: true,
    price: true,
    brand: true,
    color: false,
    size: false,
  });
  
  // Find the current category from the categories data
  const currentCategory = categories
    .flatMap(group => group.subcategories)
    .find(cat => cat.slug === categorySlug);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Filter options specific to "hartie" category
  const filterOptions = categorySlug === 'hartie' ? {
    brands: ['Navigator', 'Double A', 'Xerox', 'HP', 'Mondi', 'Daco'],
    colors: ['Alb', 'Colorat', 'Reciclat'],
    sizes: ['A4', 'A3', 'A5', 'Letter'],
    types: ['Hârtie copiator', 'Hârtie color', 'Caiete', 'Agende', 'Blocnotes', 'Registre', 'Plicuri']
  } : {
    brands: ['Brand 1', 'Brand 2', 'Brand 3'],
    colors: ['Negru', 'Alb', 'Albastru', 'Roșu'],
    sizes: ['Mic', 'Mediu', 'Mare'],
    types: ['Tip 1', 'Tip 2', 'Tip 3']
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Filtre</h2>
      
      {/* Subcategories filter */}
      {currentCategory?.subcategories && (
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('subcategories')}
          >
            <h3 className="font-medium text-gray-800">Subcategorii</h3>
            <svg
              className={`w-5 h-5 transition-transform ${expandedSections.subcategories ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <AnimatePresence>
            {expandedSections.subcategories && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3 space-y-2 overflow-hidden"
              >
                <Link 
                  href={`/category/${categorySlug}`}
                  className={`block px-3 py-2 rounded-md transition-colors ${!subcategorySlug ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  Toate produsele
                </Link>
                {currentCategory.subcategories.map((subcat) => (
                  <div key={subcat.slug}>
                    <Link 
                      href={`/category/${categorySlug}?subcategory=${subcat.slug}`}
                      className={`block px-3 py-2 rounded-md transition-colors ${subcategorySlug === subcat.slug ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                      {subcat.name}
                    </Link>
                    
                    {/* Direct link to subcategory page 
                    {subcategorySlug === subcat.slug && (
                      <div className="mt-1 mb-2 ml-3 pl-2 border-l-2 border-blue-200">
                        <Link 
                          href={`/category/${categorySlug}/${subcat.slug}`}
                          className="block px-2 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Vezi pagina dedicată →
                        </Link>
                      </div>
                    )} */}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      
      {/* Price Range Filter */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left"
          onClick={() => toggleSection('price')}
        >
          <h3 className="text-sm font-medium text-gray-900">Preț</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.price && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="flex items-center">
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="10"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between mt-2">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">lei</span>
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Min"
                />
              </div>
              <span className="mx-2 text-gray-500">-</span>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">lei</span>
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Max"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Brand Filter */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left"
          onClick={() => toggleSection('brand')}
        >
          <h3 className="text-sm font-medium text-gray-900">Brand</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.brand ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.brand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {filterOptions.brands.map((brand) => (
              <div key={brand} className="flex items-center">
                <input
                  id={`brand-${brand}`}
                  name={`brand-${brand}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-600">
                  {brand}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Type Filter - Specific to Paper Products */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left"
          onClick={() => toggleSection('type')}
        >
          <h3 className="text-sm font-medium text-gray-900">Tip produs</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.type ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.type && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {filterOptions.types.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  id={`type-${type}`}
                  name={`type-${type}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`type-${type}`} className="ml-3 text-sm text-gray-600">
                  {type}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Size Filter */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left"
          onClick={() => toggleSection('size')}
        >
          <h3 className="text-sm font-medium text-gray-900">Format</h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.size ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.size && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {filterOptions.sizes.map((size) => (
              <div key={size} className="flex items-center">
                <input
                  id={`size-${size}`}
                  name={`size-${size}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`size-${size}`} className="ml-3 text-sm text-gray-600">
                  {size}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Reset and Apply Buttons */}
      <div className="flex space-x-3">
        <button
          type="button"
          className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Resetează
        </button>
        <button
          type="button"
          className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-500 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Aplică
        </button>
      </div>
    </div>
  );
};

export default CategoryFilters;
