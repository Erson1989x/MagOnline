import { CategoryFilters, CategoryMainContent } from ".";


interface CategoryContentProps {
  products: any[];
  slug: string;
  subcategorySlug?: string;
}

export function CategoryContent({ products, slug, subcategorySlug }: CategoryContentProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar with filters */}
      <div className="w-full lg:w-1/4">
        <CategoryFilters categorySlug={slug} subcategorySlug={subcategorySlug} />
      </div>
      
      {/* Main content with products */}
      <CategoryMainContent products={products} slug={slug} />
    </div>
  );
}

export default CategoryContent;