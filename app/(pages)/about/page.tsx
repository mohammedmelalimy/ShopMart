import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black transition-colors">
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-black dark:text-white mb-6">
          About This <span className="text-blue-600 dark:text-blue-400">Project</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          This project demonstrates modern web development using Next.js, dynamic routing,
          server-side data fetching, and responsive UI design with Tailwind CSS.
        </p>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '⚡ Modern Next.js',
              desc: 'Built using the App Router architecture for scalable and modern React applications.'
            },
            {
              title: '🎨 Clean UI',
              desc: 'Responsive and modern design built with Tailwind CSS utilities.'
            },
            {
              title: '🚀 Dynamic Content',
              desc: 'Posts are fetched dynamically with individual pages for each article.'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-black border border-gray-200 dark:border-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-gray-100 dark:bg-black py-20 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Built By a Passionate Developer
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8">
            This project is part of my journey learning modern frontend development with React and
            Next.js, focusing on performance, scalability, and clean UI.
          </p>

          <Link href="/products" className="bg-blue-600 dark:bg-blue-500 text-white dark:text-black px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition">
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}