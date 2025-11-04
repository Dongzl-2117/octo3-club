import { ExternalLink, BookOpen, Tag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import resources from "../data/resources.json";

export default function Resources() {
  // Group resources by category
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  const categoryColors: Record<string, { gradient: string; bg: string; text: string }> = {
    "Programming": { 
      gradient: "from-blue-500 to-indigo-600", 
      bg: "bg-blue-50", 
      text: "text-blue-700" 
    },
    "Algorithms": { 
      gradient: "from-purple-500 to-pink-600", 
      bg: "bg-purple-50", 
      text: "text-purple-700" 
    },
    "Machine Learning": { 
      gradient: "from-green-500 to-teal-600", 
      bg: "bg-green-50", 
      text: "text-green-700" 
    },
    "Web Development": { 
      gradient: "from-orange-500 to-red-600", 
      bg: "bg-orange-50", 
      text: "text-orange-700" 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <BookOpen className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Resources</h2>
          </div>
          <p className="text-xl text-pink-100 max-w-3xl">
            Curated collection of learning materials, papers, and useful links to help you dive deep into various fields
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => {
          const categoryResources = resources.filter((r) => r.category === category);
          const colorScheme = categoryColors[category] || categoryColors["Programming"];
          
          return (
            <section key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br ${colorScheme.gradient}`}>
                  <Tag className="text-white" size={20} />
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {categoryResources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${colorScheme.gradient}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                          {resource.title}
                        </h4>
                        <div className={`p-2 rounded-lg ${colorScheme.bg} ml-2 flex-shrink-0`}>
                          <BookOpen size={20} className={colorScheme.text} />
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${colorScheme.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        Visit Resource
                        <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <BookOpen className="text-gray-400" size={40} />
            </div>
            <p className="text-gray-500 text-lg">No resources available yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

