import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type BlogPostCardProps = {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
  };
  index: number;
};

const BlogPostCard: FC<BlogPostCardProps> = ({ post, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
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
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
          <a href="#" className="text-gray-800 hover:text-indigo-600 transition-colors">{post.title}</a>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800"
        >
          <span className="relative">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            Citește mai mult
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;