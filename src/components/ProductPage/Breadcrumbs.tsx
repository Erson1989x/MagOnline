import { Product } from '@/lib';
import Link from 'next/link';


interface BreadcrumbsProps {
  product: Product;
}

export default function Breadcrumbs({ product }: BreadcrumbsProps) {
  return (
    <div className="flex items-center text-sm mb-8">
      <Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors">
        Acasă
      </Link>
      <ChevronIcon />
      <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-indigo-600 transition-colors">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </Link>
      <ChevronIcon />
      <span className="text-gray-900 font-medium">
        {product.name}
      </span>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}