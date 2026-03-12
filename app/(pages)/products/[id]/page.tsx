import Link from 'next/link';
import type { Product } from '@/app/types/index';

type ParamsType = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ParamsType) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Product = await res.json();

  return (
    <div className="container mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/products"
        className="text-blue-600 hover:text-blue-800 transition mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8">
        <span className="text-sm text-gray-400">Product #{data.id}</span>

        <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-6">{data.title}</h1>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">{data.description}</p>

        <div className="flex flex-col gap-2 text-gray-700">
          <p>
            <strong>Brand:</strong> {data.brand}
          </p>
          <p>
            <strong>Category:</strong> {data.category}
          </p>
          <p>
            <strong>Price:</strong> ${data.price}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating}
          </p>
          <p>
            <strong>In Stock:</strong> {data.stock}
          </p>
        </div>

        <div className="mt-6 flex gap-4 overflow-x-auto">
          {data.images.map((img) => (
            <img
              key={img}
              src={img}
              alt={data.title}
              className="w-32 h-32 object-cover rounded-lg border"
            />
          ))}
        </div>
      </article>
    </div>
  );
}
