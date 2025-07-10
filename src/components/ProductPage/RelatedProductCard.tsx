import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface RelatedProductCardProps {
  product: Product;
}

export default function RelatedProductCard({ product }: RelatedProductCardProps) {
  return (
    <Link 
      href={`/product/${product.slug}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden"
    >
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </div>
        )}
      </div>
      
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
        </div>
      </div>
    </Link>
  );
}