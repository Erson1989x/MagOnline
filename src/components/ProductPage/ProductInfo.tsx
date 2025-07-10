
import { Product } from '@/lib';
import ProductPrice from './ProductPrice';
import StockStatus from './StockStatus';
import ProductAttributes from './ProductAttributes';
import AddToCartButton from './AddToCartButton';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
      
      <div className="text-sm text-gray-500 mb-4">
        Brand: <span className="font-medium text-gray-700">{product.brand}</span>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700">{product.description}</p>
      </div>
      
      <ProductPrice price={product.price} discount={product.discount} />
      <StockStatus inStock={product.inStock} />
      
      {product.attributes && (
        <ProductAttributes attributes={product.attributes} />
      )}
      
      <div className="mt-auto">
        <AddToCartButton inStock={product.inStock} />
      </div>
    </div>
  );
}