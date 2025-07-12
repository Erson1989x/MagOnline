"use client";

import { categories } from '@/components/Navbar/data/categories';
import { getProductsByCategory } from '@/lib/products';
import { CategorySlug, SubcategorySlug } from '@/lib/slugTypes';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';

export function useCategoryData(slug: CategorySlug, subcategorySlug?: SubcategorySlug) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Find the category from our categories data
  const category = categories.flatMap(group => group.subcategories)
    .find(cat => cat.slug === slug);
  
  // Find the subcategory if a subcategory slug is provided
  const subcategory = subcategorySlug && category?.subcategories ? 
    category.subcategories.find(subcat => subcat.slug === subcategorySlug) : 
    undefined;

  // Direct product fetching - trigger immediately if not initialized
  if (!initialized) {
    setInitialized(true);
    
    // Fetch products directly from Shopify
    getProductsByCategory(slug, subcategorySlug)
      .then(fetchedProducts => {
        setProducts(fetchedProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error('[useCategoryData] Error fetching products:', err);
        setError('Failed to load products');
        setProducts([]);
        setLoading(false);
      });
  }
  
  return { category, subcategory, products, loading, error };
}