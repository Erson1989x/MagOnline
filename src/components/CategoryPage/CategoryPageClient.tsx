"use client";

import { useEffect } from 'react';
import { useCategoryData } from '@/hooks/useCategoryData';
import { CategoryPageLayout } from '@/components/CategoryPage/CategoryPageLayout';
import { CategorySlug, SubcategorySlug } from '@/lib/slugTypes';

interface CategoryPageClientProps {
  slug: CategorySlug;
  subcategorySlug?: SubcategorySlug;
}

export function CategoryPageClient({ slug, subcategorySlug }: CategoryPageClientProps) {
  // Get category and subcategory data
  const { category, subcategory, products, loading, error } = useCategoryData(slug, subcategorySlug);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Se încarcă produsele...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Eroare</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // If category doesn't exist, show error
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Categoria nu a fost găsită</h2>
          <p className="text-gray-600">Categoria solicitată nu există.</p>
        </div>
      </div>
    );
  }
  
  return (
    <CategoryPageLayout 
      category={category} 
      subcategory={subcategory} 
      products={products} 
      slug={slug} 
      subcategorySlug={subcategorySlug}
    />
  );
}
