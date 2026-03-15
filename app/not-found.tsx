import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors px-6 text-center">
      <h1 className="text-6xl font-extrabold text-black dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}