// pages/category/[slug].tsx
import { notFound } from 'next/navigation';
import { CategoryPageClient } from '@/components/CategoryPage/CategoryPageClient';
import { CategoryGroup } from '@/lib';
import { CategorySlug, SubcategorySlug } from '@/lib/slugTypes';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    subcategory?: string;
  }>;
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
    // Paper subcategories
    "hartie-toate-dimensiunile", "hartie-colorata", "hartie-foto",
    "registre", "tipizate", "plicuri", "etichete", "caiete", "agende",
    // Birou subcategories
    "bibliorafturi", "separatoare", "cutii-arhivare", "dosare-plastic",
    "dosare-carton", "folii", "mape-cu-butoni", "serviete", "clipboard",
    "capsatoare", "agrafe-si-clipsuri", "banda-adeziva", "lipici",
    "foarfece", "ace", "pionieze", "rigle", "baterii", "accesorii-indosariere"
  ];
  return validSlugs.includes(slug as SubcategorySlug);
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await (searchParams || Promise.resolve({}));
  const subcategorySlug = (resolvedSearchParams as any).subcategory;
  
  // Validate slug before using it
  if (!isValidCategorySlug(slug)) {
    notFound();
  }
  
  // Validate subcategory slug if provided
  const validSubcategorySlug = subcategorySlug && isValidSubcategorySlug(subcategorySlug) 
    ? subcategorySlug 
    : undefined;
  
  return (
    <CategoryPageClient 
      slug={slug} 
      subcategorySlug={validSubcategorySlug}
    />
  );
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