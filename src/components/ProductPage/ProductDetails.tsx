
import { Product } from '@/lib';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}