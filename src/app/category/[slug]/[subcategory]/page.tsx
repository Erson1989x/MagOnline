import { notFound } from 'next/navigation';
import { categories } from '@/components/Navbar/data/categories';
import { CategoryHeader, ProductGrid, CategoryFilters, RelatedCategories } from '@/components/CategoryPage';
import { getProductsByCategory } from '@/lib';
import { Subcategory } from '@/lib/types';

// Define the props for the page component
interface SubcategoryPageProps {
  params: {
    slug: string;
    subcategory: string;
  };
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { slug, subcategory: subcategorySlug } = params;
  
  // Find the category from our categories data
  const category = categories.flatMap(group => group.subcategories)
    .find(cat => cat.slug === slug);
  
  // If category doesn't exist, return 404
  if (!category) {
    notFound();
  }
  
  // Find the subcategory
  const subcategory = category.subcategories?.find(subcat => subcat.slug === subcategorySlug);
  
  // If subcategory doesn't exist, return 404
  if (!subcategory) {
    notFound();
  }
  
  // Get products for this subcategory
  const products = getProductsByCategory(slug, subcategorySlug);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header with title and breadcrumbs */}
      <CategoryHeader category={category} subcategory={subcategory} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-1/4">
            <CategoryFilters categorySlug={slug} subcategorySlug={subcategorySlug} />
          </div>
          
          {/* Main content with products */}
          <div className="w-full lg:w-3/4">
            <ProductGrid products={products} />
            
            {/* Related categories section */}
            <RelatedCategories currentCategorySlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all subcategories
export async function generateStaticParams() {
  const paths: { slug: string; subcategory: string }[] = [];
  
  categories.flatMap(group => group.subcategories).forEach(category => {
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        paths.push({
          slug: category.slug,
          subcategory: subcategory.slug,
        });
      });
    }
  });
  
  return paths;
}
