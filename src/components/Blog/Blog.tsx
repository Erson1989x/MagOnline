"use client";
import { useState } from 'react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import PostGrid from './components/PostGrid/PostGrid';
import ViewMoreButton from './components/ViewMoreButton/ViewMoreButton';
import { blogPosts, categories } from './data/blogPosts';


const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory);
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-50 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>
      <div className="container mx-auto px-4">
        <BlogHeader />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <PostGrid posts={filteredPosts} />
        <ViewMoreButton />
      </div>
    </section>
  );
};

export default Blog;