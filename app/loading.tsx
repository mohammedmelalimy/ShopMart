export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Latest Products</h1>
        <p className="text-gray-500 mt-2">Explore our newest articles and insights</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow animate-pulse">
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>

            <div className="space-y-2 mb-6">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="h-3 bg-gray-300 rounded w-4/6"></div>
            </div>

            <div className="h-9 bg-gray-300 rounded w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
