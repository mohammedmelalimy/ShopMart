import Link from 'next/link';
import type { Metadata } from 'next';
import { Product } from './types';

export const metadata: Metadata = {
  title: 'ShopMart | Home',
  description: 'Modern e-commerce built with Next.js and Tailwind CSS'
};

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products?limit=3');
  const data = await res.json();

  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Build Modern Apps With
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Next.js & Tailwind
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl text-lg mb-10">
          A modern blog project demonstrating dynamic routing, server components and responsive UI.
        </p>

        <div className="flex gap-4">
          <Link
            href="/posts"
            className="px-7 py-3 bg-blue-600 text-white rounded-xl font-medium hover:scale-105 hover:bg-blue-700 transition shadow-lg"
          >
            Explore Products →
          </Link>

          <Link
            href="/about"
            className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            About Project
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Project Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                ⚡ Next.js App Router
              </h3>
              <p className="text-gray-600">Modern architecture using server components.</p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                🎨 Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Responsive modern UI built with utility-first styling.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                🚀 Dynamic Routing
              </h3>
              <p className="text-gray-600">Individual pages for each post powered by Next.js.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Best Posts</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.products.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{product.description}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-auto text-blue-600 hover:underline"
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
