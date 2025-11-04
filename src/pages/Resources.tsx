import { ExternalLink } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import resources from "../data/resources.json";

export default function Resources() {
  // Group resources by category
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-4">Resource Library</h2>
        <p className="text-gray-600 mb-8">
          Curated collection of learning materials, papers, and useful links
        </p>

        {categories.map((category) => {
          const categoryResources = resources.filter((r) => r.category === category);
          return (
            <section key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categoryResources.map((resource) => (
                  <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <h4 className="text-xl font-semibold mb-2">{resource.title}</h4>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Visit Resource
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

