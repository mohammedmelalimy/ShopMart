export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          About This <span className="text-blue-600">Project</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          This project demonstrates modern web development using Next.js,
          dynamic routing, server-side data fetching, and responsive UI
          design with Tailwind CSS.
        </p>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition">
              ⚡ Modern Next.js
            </h3>
            <p className="text-gray-600">
              Built using the App Router architecture for scalable and modern
              React applications.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition">
              🎨 Clean UI
            </h3>
            <p className="text-gray-600">
              Responsive and modern design built with Tailwind CSS utilities.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition">
              🚀 Dynamic Content
            </h3>
            <p className="text-gray-600">
              Posts are fetched dynamically with individual pages for each
              article.
            </p>
          </div>

        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Built By a Passionate Developer
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            This project is part of my journey learning modern frontend
            development with React and Next.js, focusing on performance,
            scalability, and clean UI.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Posts
          </button>

        </div>
      </section>

    </div>
  )
}