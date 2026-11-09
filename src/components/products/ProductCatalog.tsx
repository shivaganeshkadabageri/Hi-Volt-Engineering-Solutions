'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { productsData, productCategories } from '@/content/products';
import { ProductCategory } from '@/lib/types';

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const [internalCategory, setInternalCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Active category is derived directly from query parameter when present
  const selectedCategory = categoryParam || internalCategory;

  const handleCategorySelect = (category: string) => {
    setInternalCategory(category);
    if (category === 'All') {
      router.push('/products', { scroll: false });
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // 1. Category match
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      // 2. Search query match
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.rating.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.applicableStandards.some((st) => st.toLowerCase().includes(q)) ||
        (product.applications && product.applications.some((app) => app.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by model, rating (e.g. 100kV, 300kV, pC), or standard (IEC 60060)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Count indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 shrink-0 font-medium">
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-sm">
              {filteredProducts.length}
            </span>
            <span>of {productsData.length} Products</span>
          </div>
        </div>

        {/* Category Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar" role="tablist">
          <button
            onClick={() => handleCategorySelect('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === 'All'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            role="tab"
            aria-selected={selectedCategory === 'All'}
          >
            All Products ({productsData.length})
          </button>

          {productCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = productsData.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-sky-700 text-sky-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No equipment matching your criteria
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try resetting your search query or switching categories. Alternatively, contact us directly for custom configurations.
          </p>
          <button
            onClick={() => {
              setInternalCategory('All');
              setSearchQuery('');
              router.push('/products');
            }}
            className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-bold hover:bg-sky-500 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
