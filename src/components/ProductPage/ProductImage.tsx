import { Product } from '@/lib';
import Image from 'next/image';


interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="relative h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-contain p-4"
      />
      {product.discount > 0 && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md">
          -{product.discount}%
        </div>
      )}
    </div>
  );
}