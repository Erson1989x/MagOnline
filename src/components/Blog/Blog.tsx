"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Cum să alegi cele mai bune instrumente de scris pentru birou',
    excerpt: 'Ghid complet pentru alegerea instrumentelor de scris potrivite pentru mediul de birou profesional.',
    image: '/HP 1.png',
    category: 'Sfaturi',
    date: '10 Iunie 2025',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Top 10 produse de papetărie esențiale pentru studenți',
    excerpt: 'Descoperă produsele de papetărie care nu trebuie să lipsească din ghiozdanul niciunui student.',
    image: '/HP 2.png',
    category: 'Recomandări',
    date: '5 Iunie 2025',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Cadouri corporate personalizate - Tendințe în 2025',
    excerpt: 'Află care sunt cele mai apreciate cadouri corporate și cum să le personalizezi pentru a impresiona partenerii de afaceri.',
    image: '/HP 3.png',
    category: 'Tendințe',
    date: '1 Iunie 2025',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Cum să organizezi eficient spațiul de birou',
    excerpt: 'Sfaturi practice pentru organizarea biroului și creșterea productivității la locul de muncă.',
    image: '/HP 4.png',
    category: 'Organizare',
    date: '28 Mai 2025',
    readTime: '8 min'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'Toate' },
  { id: 'sfaturi', name: 'Sfaturi' },
  { id: 'recomandari', name: 'Recomandări' },
  { id: 'tendinte', name: 'Tendințe' },
  { id: 'organizare', name: 'Organizare' }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory);
  
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
            Blog & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Sfaturi</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Articole, sfaturi și recomandări pentru produsele noastre și organizarea eficientă
          </motion.p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} citire</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Citește mai mult
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <button className="bg-white text-indigo-600 border-2 border-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
            Vezi toate articolele
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
