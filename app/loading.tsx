export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Latest Products
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore our newest Products 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow animate-pulse
                       bg-gray-100 dark:bg-gray-800
                       dark:shadow-gray-900/50"
          >
            {/* Title skeleton */}
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>

            {/* Description skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
            </div>

            {/* Button skeleton */}
            <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
}