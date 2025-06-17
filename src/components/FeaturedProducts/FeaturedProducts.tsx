"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Stilou Parker Sonnet',
    price: 299.99,
    image: '/HP 1.png',
    category: 'instrumente-scris',
    rating: 4.9,
    reviews: 124,
    isNew: true,
    isBestseller: true
  },
  {
    id: 2,
    name: 'Set organizare birou',
    price: 149.99,
    image: '/HP 2.png',
    category: 'birou',
    rating: 4.7,
    reviews: 86,
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: 'Hârtie copiator A4',
    price: 24.99,
    image: '/HP 3.png',
    category: 'hartie',
    rating: 4.8,
    reviews: 210,
    isNew: false,
    isBestseller: false
  },
  {
    id: 4,
    name: 'Agendă personalizată AI',
    price: 79.99,
    image: '/HP 4.png',
    category: 'ai-giftistry',
    rating: 5.0,
    reviews: 42,
    isNew: true,
    isBestseller: false
  },
  {
    id: 5,
    name: 'Biblioraft Herlitz',
    price: 19.99,
    image: '/HP 5.png',
    category: 'birou',
    rating: 4.6,
    reviews: 158,
    isNew: false,
    isBestseller: true
  },
  {
    id: 6,
    name: 'Set markere Daco',
    price: 34.99,
    image: '/HP 1.png',
    category: 'instrumente-scris',
    rating: 4.5,
    reviews: 73,
    isNew: true,
    isBestseller: false
  },
  {
    id: 7,
    name: 'Whiteboard magnetic',
    price: 199.99,
    image: '/HP 2.png',
    category: 'afisare',
    rating: 4.8,
    reviews: 91,
    isNew: false,
    isBestseller: true
  },
  {
    id: 8,
    name: 'Cană personalizată AI',
    price: 49.99,
    image: '/HP 3.png',
    category: 'ai-giftistry',
    rating: 4.9,
    reviews: 37,
    isNew: true,
    isBestseller: false
  }
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'Toate produsele' },
    { id: 'bestsellers', label: 'Bestsellers' },
    { id: 'new', label: 'Noutăți' }
  ];
  
  const filteredProducts = featuredProducts.filter(product => {
    if (activeTab === 'all') return true;
    if (activeTab === 'bestsellers') return product.isBestseller;
    if (activeTab === 'new') return product.isNew;
    return true;
  });
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Cele mai căutate
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Produse <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Populare</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descoperă produsele noastre cele mai apreciate și noutățile din stoc
          </motion.p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1 border border-gray-100">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Product image */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-blue-50/50 overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-200/20 rounded-full blur-md group-hover:bg-indigo-200/30 transition-all duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-md group-hover:bg-blue-200/30 transition-all duration-500"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                      Nou
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                      Bestseller
                    </span>
                  )}
                </div>
                
                {/* Quick actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
                  <div className="flex justify-center gap-2">
                    <button 
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-indigo-100 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-indigo-100 transition-colors"
                      aria-label="Quick view"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product info */}
              <div className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-gray-900 mb-1 hover:text-indigo-600 transition-colors group-hover:text-indigo-600">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                
                {/* Price and add to cart */}
                <div className="flex items-center justify-between">
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">{product.price.toFixed(2)} lei</span>
                  <button 
                    className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all hover:scale-110 shadow-sm"
                    aria-label="Add to cart"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all products button */}
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium transition-all hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-100 relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-500 ease-out group-hover:w-full opacity-80"></span>
            <span className="relative flex items-center">
              Vezi toate produsele
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
