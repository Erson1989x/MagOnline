import { ProductGrid, RelatedCategories } from ".";


interface CategoryMainContentProps {
  products: any[];
  slug: string;
}

export function CategoryMainContent({ products, slug }: CategoryMainContentProps) {
  return (
    <div className="w-full lg:w-3/4">
      <ProductGrid products={products} />
      
      {/* Related categories section */}
      <RelatedCategories currentCategorySlug={slug} />
    </div>
  );
}

export default CategoryMainContent;