import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  Download,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { productsData } from '@/content/products';
import { ProductCard } from '@/components/products/ProductCard';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} (${product.rating}) | Hi-Volt Engineering Solutions`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Hi-Volt Engineering Solutions`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 800,
          height: 320,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Find related products
  const relatedProducts = productsData
    .filter((p) => {
      if (p.slug === product.slug) return false;
      if (product.relatedProductSlugs?.includes(p.slug)) return true;
      return p.category === product.category;
    })
    .slice(0, 3);

  // JSON-LD Product Schema
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://www.hivoltengineeringsolutions.com${product.image}`,
    description: product.shortDescription,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Hi-Volt Engineering Solutions',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Hi-Volt Engineering Solutions',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://www.hivoltengineeringsolutions.com/products/${product.slug}`,
    },
  };

  return (
    <div className="py-10 sm:py-16 bg-slate-50 dark:bg-[#0B132B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6"
        >
          <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-sky-600 dark:hover:text-sky-400">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gallery / Schematic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <Image
                src={product.image}
                alt={`${product.name} Schematic & System Diagram`}
                fill
                priority
                className="object-contain p-4"
              />
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold text-sky-400">
                {product.category}
              </div>
            </div>

            {/* Standards Compliance Strip */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Standard Conformance:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.applicableStandards.map((st) => (
                  <span
                    key={st}
                    className="px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 font-mono text-xs font-bold"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title, Rating, Descriptions, Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight">
                {product.name}
              </h1>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-400 font-mono font-bold text-sm">
                <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Rating: {product.rating}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Target Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Target Testing Applications:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs: Request Quote and Datasheet Download */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?product=${product.slug}&subject=Quotation%20Request%3A%20${encodeURIComponent(product.name)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-md"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Request a Quote for this Product</span>
              </Link>

              {/* Datasheet Download Slot (clearly marked placeholder as requested) */}
              <div className="relative group">
                <div className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-dashed border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-not-allowed w-full">
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Download Datasheet</span>
                </div>
                <div className="mt-1 text-[11px] text-amber-600 dark:text-amber-400 font-mono flex items-center gap-1 justify-center">
                  <AlertCircle className="w-3 h-3" />
                  <span>TODO: add datasheet</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Specifications &amp; Parameters
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Standard technical parameters conforming to national and international standards.
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              Model Ref: HV-{product.slug.toUpperCase().slice(0, 12)}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-6 w-1/3">Parameter / Feature</th>
                  <th className="py-3 px-6">Specification Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-semibold text-slate-900 dark:text-white">
                    Key Rating
                  </td>
                  <td className="py-3.5 px-6 font-mono font-bold text-amber-600 dark:text-amber-400">
                    {product.rating}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-semibold text-slate-900 dark:text-white">
                    Category Group
                  </td>
                  <td className="py-3.5 px-6 text-slate-700 dark:text-slate-300">
                    {product.category}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-semibold text-slate-900 dark:text-white">
                    Applicable Standards
                  </td>
                  <td className="py-3.5 px-6 text-slate-700 dark:text-slate-300 font-mono">
                    {product.applicableStandards.join(', ')}
                  </td>
                </tr>

                {product.specifications.map((spec, idx) => {
                  const isPlaceholder = spec.value.includes('TODO');
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-3.5 px-6 font-semibold text-slate-900 dark:text-white">
                        {spec.key}
                      </td>
                      <td className="py-3.5 px-6 text-slate-700 dark:text-slate-300">
                        {isPlaceholder ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{spec.value}</span>
                          </span>
                        ) : (
                          spec.value
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Equipment Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Related High Voltage Equipment
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Complementary test instruments often deployed alongside this model.
                </p>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 inline-flex items-center gap-1"
              >
                <span>View Full Catalogue</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
