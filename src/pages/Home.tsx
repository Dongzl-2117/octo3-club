import { Link } from "wouter";
import { Calendar, BookOpen, Image, ArrowRight, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import presentations from "../data/presentations.json";

export default function Home() {
  const upcomingPresentations = presentations
    .filter((p) => p.status === "upcoming")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              HKU CS Study Group
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              A collaborative platform for HKU Computer Science students to share knowledge, present research, and grow together.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/presentations">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Presentations
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              What We Offer
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Weekly Presentations",
                description: "Regular knowledge sharing sessions where members present on various CS topics",
              },
              {
                icon: Users,
                title: "Discussion Forums",
                description: "Engage in meaningful discussions about presentations and topics",
              },
              {
                icon: BookOpen,
                title: "Resource Library",
                description: "Curated collection of papers, articles, and learning materials",
              },
              {
                icon: Image,
                title: "Event Gallery",
                description: "Photos and memories from our group activities and events",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-100 mb-5">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Presentations */}
      {upcomingPresentations.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4 animate-slideInLeft">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-3">
                  <span className="gradient-text-blue">Upcoming Presentations</span>
                </h3>
                <p className="text-xl text-gray-600">Exciting content you don't want to miss</p>
              </div>
              <Link href="/presentations">
                <a className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg cursor-pointer transition-bounce">
                  View All
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {upcomingPresentations.map((presentation, index) => (
                <div
                  key={presentation.id}
                  className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-smooth hover:-translate-y-2 animate-scaleIn"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-5 glass px-4 py-2 rounded-full w-fit">
                      <Calendar size={16} />
                      <span>{new Date(presentation.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {presentation.title}
                    </h4>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed">{presentation.description}</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-base font-bold shadow-premium">
                        {presentation.speaker.charAt(0)}
                      </div>
                      <span className="text-base text-gray-700 font-semibold">{presentation.speaker}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

