import { CategoryContent, CategoryHeader } from ".";


interface CategoryPageLayoutProps {
  category: any;
  subcategory?: any;
  products: any[];
  slug: string;
  subcategorySlug?: string;
}

export function CategoryPageLayout({ 
  category, 
  subcategory, 
  products, 
  slug, 
  subcategorySlug 
}: CategoryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header with title and breadcrumbs */}
      <CategoryHeader category={category} subcategory={subcategory} />
      
      <div className="container mx-auto px-4 py-8">
        <CategoryContent 
          products={products} 
          slug={slug} 
          subcategorySlug={subcategorySlug} 
        />
      </div>
    </div>
  );
}

export default CategoryPageLayout;