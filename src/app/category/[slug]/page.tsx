// pages/category/[slug].tsx
import { notFound } from 'next/navigation';
import { useCategoryData } from '@/hooks/useCategoryData';
import { CategoryPageLayout } from '@/components/CategoryPage/CategoryPageLayout';
import { CategoryGroup } from '@/lib';

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    subcategory?: string;
  };
}

export default function CategoryPage({ params, searchParams = {} }: CategoryPageProps) {
  const { slug } = params;
  const { subcategory: subcategorySlug } = searchParams;
  
  // Get category and subcategory data
  const { category, subcategory, products } = useCategoryData(slug, subcategorySlug);
  
  // If category doesn't exist, return 404
  if (!category) {
    notFound();
  }
  
  return <CategoryPageLayout 
    category={category} 
    subcategory={subcategory} 
    products={products} 
    slug={slug} 
    subcategorySlug={subcategorySlug}
  />;
}

// Generate static params for all categories
export async function generateStaticParams() {
  const { categories } = require('@/components/Navbar/data/categories');
  
  const paths = categories.flatMap((group: CategoryGroup) => 
    group.subcategories.map(category => ({
      slug: category.slug,
    }))
  );
  
  return paths;
}