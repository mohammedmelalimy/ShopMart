import Link from 'next/link';
import type { Metadata } from 'next';
import type { Product } from '../../types/index';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products'
};

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <main className="min-h-screen bg-white dark:bg-black py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black dark:text-white">Latest Products</h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Explore our newest products</p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-black rounded-2xl border border-black dark:border-white shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between group"
            >
              {/* Product ID */}
              <span className="text-xs font-semibold bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full w-fit mb-4">
                Product #{product.id}
              </span>

              {/* Product Image */}
              <Image
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-6 "
                loading="lazy"
                width={500}
                height={500}
              />

              {/* Product Title */}
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition">
                {product.title}
              </h2>

              {/* Product Description */}
              <p className="text-gray-800 dark:text-gray-200 text-sm mb-6 line-clamp-3">
                {product.description}
              </p>

              {/* View Product Button */}
              <Link
                href={`/products/${product.id}`}
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-black dark:bg-white border border-white dark:border-black px-5 py-2 text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition"
              >
                View Product →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
