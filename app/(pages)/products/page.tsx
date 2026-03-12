import Link from 'next/link';
import type { Metadata } from 'next';
import type { Product } from '../../types/index';

export const metadata: Metadata = {
  title: 'Products'
};

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Latest Products</h1>
          <p className="text-gray-500 mt-2">Explore our newest products</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between group"
            >
              <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit mb-4">
                Product #{product.id}
              </span>

              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                {product.title}
              </h2>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3">{product.description}</p>

              <Link
                href={`/products/${product.id}`}
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-white text-sm font-medium hover:bg-blue-700 transition"
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
