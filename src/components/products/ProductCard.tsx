import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Product Image Thumbnail */}
        <Link
          href={`/products/${product.slug}`}
          className="block relative w-full h-48 bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
              Featured
            </div>
          )}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-sky-400 text-[10px] font-mono font-bold">
            {product.category}
          </div>
        </Link>

        {/* Content Area */}
        <div className="p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              <Link href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            </h3>
            <div className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
              {product.rating}
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Standards Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.applicableStandards.slice(0, 3).map((st) => (
              <span
                key={st}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300"
              >
                {st}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2">
        <div className="pt-3 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/contact?product=${product.slug}&subject=Quotation%20Request%3A%20${encodeURIComponent(product.name)}`}
            className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold transition-colors inline-flex items-center gap-1"
          >
            <Zap className="w-3 h-3" />
            <span>Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
