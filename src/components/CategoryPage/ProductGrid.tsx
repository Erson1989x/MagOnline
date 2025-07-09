"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="mb-12">
      {/* Grid header with count and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-200">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-lg font-medium text-gray-900">
            {products.length} produse
          </h2>
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
            Sortează după:
          </label>
          <select 
            id="sort"
            className="text-sm border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="popular">Popularitate</option>
            <option value="price-asc">Preț (crescător)</option>
            <option value="price-desc">Preț (descrescător)</option>
            <option value="newest">Cele mai noi</option>
          </select>
        </div>
      </div>
      
      {/* Products grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={`/product/${product.slug}`} className="block">
                {/* Product image */}
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Discount badge if applicable */}
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                
                {/* Product details */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  
                  <div className="text-sm text-gray-500 mb-2">
                    {product.brand}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {product.discount > 0 ? (
                        <>
                          <span className="text-lg font-bold text-gray-900">
                            {(product.price * (1 - product.discount / 100)).toFixed(2)} lei
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            {product.price.toFixed(2)} lei
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          {product.price.toFixed(2)} lei
                        </span>
                      )}
                    </div>
                    
                    {/* Stock status */}
                    <div className={`text-xs font-medium px-2 py-1 rounded ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'În stoc' : 'Stoc epuizat'}
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Quick add to cart button that appears on hover */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-blue-500 text-white py-3 flex justify-center items-center transition-all duration-300 ${
                hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <button 
                  className="flex items-center text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic would go here
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Adaugă în coș
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nu am găsit produse</h3>
          <p className="text-gray-500">Încercați să modificați filtrele sau să căutați altceva.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
