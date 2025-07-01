"use client";
import { useState } from 'react';
import { featuredProducts } from './data/featuredProducts';
import BackgroundElements from './components/BackgroundElements/BackgroundElements';
import SectionHeader from './components/SectionHeader/SectionHeader';
import FilterTabs from './components/FilterTabs/FilterTabs';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ViewAllButton from './components/ViewAllButton/ViewAllButton';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'Toate produsele' },
    { id: 'bestsellers', label: 'Bestsellers' },
    { id: 'new', label: 'Noutăți' }
  ];
  
  const filteredProducts = featuredProducts.filter(product => {
    if (activeTab === 'all') return true;
    if (activeTab === 'bestsellers') return product.isBestseller;
    if (activeTab === 'new') return product.isNew;
    return true;
  });
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <FilterTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <ProductGrid products={filteredProducts} />
        
        <ViewAllButton />
      </div>
    </section>
  );
};

export default FeaturedProducts;