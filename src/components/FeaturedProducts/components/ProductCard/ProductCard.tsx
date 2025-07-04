
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProductBadges from '../ProductBadges/ProductBadges';
import QuickActions from '../QuickActions/QuickActions';
import ProductRating from '../ProductRating/ProductRating';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestseller: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
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
        
        <ProductBadges product={product} />
        <QuickActions />
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-indigo-600 transition-colors group-hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        
        <ProductRating rating={product.rating} reviews={product.reviews} />
        
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
  );
};

export default ProductCard;