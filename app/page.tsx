import Link from 'next/link';
import type { Metadata } from 'next';
import { Product } from './types';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ShopMart | Home',
  description: 'Modern e-commerce built with Next.js and Tailwind CSS'
};

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products?limit=3');
  const data = await res.json();

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-black">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white mb-6 leading-tight">
          Build Modern Apps With
          <span className="block text-blue-600 dark:text-white">Next.js & Tailwind</span>
        </h1>

        <p className="text-gray-800 dark:text-gray-300 max-w-2xl text-lg mb-10">
          A modern blog project demonstrating dynamic routing, server components and responsive UI.
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <Link
            href="/posts"
            className="px-7 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-medium hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-lg"
          >
            Explore Products →
          </Link>

          <Link
            href="/about"
            className="px-7 py-3 border border-black dark:border-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            About Project
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
            Project Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Next.js App Router', 'Tailwind CSS', 'Dynamic Routing'].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 dark:bg-black dark:border-gray-700 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white group-hover:text-blue-600 transition">
                  {feature}
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  {feature === 'Next.js App Router' &&
                    'Modern architecture using server components.'}
                  {feature === 'Tailwind CSS' &&
                    'Responsive modern UI built with utility-first styling.'}
                  {feature === 'Dynamic Routing' &&
                    'Individual pages for each post powered by Next.js.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
            Best Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.products.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-black p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {product.title}
                </h3>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={500}
                  height={500}
                />

                <p className="text-gray-800 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
