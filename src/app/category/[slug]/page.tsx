// pages/category/[slug].tsx
import { notFound } from 'next/navigation';
import { useCategoryData } from '@/hooks/useCategoryData';
import { CategoryPageLayout } from '@/components/CategoryPage/CategoryPageLayout';
import { CategoryGroup } from '@/lib';
import { CategorySlug, SubcategorySlug } from '@/lib/slugTypes';

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    subcategory?: string;
  };
}

// Type guard to check if a string is a valid CategorySlug
function isValidCategorySlug(slug: string): slug is CategorySlug {
  const validSlugs: CategorySlug[] = [
    "hartie", "birou", "afisare", "instrumente-scris", 
    "accesorii-it", "curatenie", "rechizite", "cadouri",
    "parker", "daco", "herlitz"
  ];
  return validSlugs.includes(slug as CategorySlug);
}

// Type guard to check if a string is a valid SubcategorySlug
function isValidSubcategorySlug(slug: string): slug is SubcategorySlug {
  const validSlugs: SubcategorySlug[] = [
    "hartie-toate-dimensiunile", "hartie-colorata", "hartie-foto",
    "registre", "tipizate", "plicuri", "etichete", "caiete", "agende"
  ];
  return validSlugs.includes(slug as SubcategorySlug);
}

export default function CategoryPage({ params, searchParams = {} }: CategoryPageProps) {
  const { slug } = params;
  const { subcategory: subcategorySlug } = searchParams;
  
  // Validate slug before using it
  if (!isValidCategorySlug(slug)) {
    notFound();
  }
  
  // Validate subcategory slug if provided
  const validSubcategorySlug = subcategorySlug && isValidSubcategorySlug(subcategorySlug) 
    ? subcategorySlug 
    : undefined;
  
  // Get category and subcategory data
  const { category, subcategory, products } = useCategoryData(slug, validSubcategorySlug);
  
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