import { Link } from "wouter";
import { Calendar, BookOpen, Image } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import presentations from "../data/presentations.json";

export default function Home() {
  const upcomingPresentations = presentations
    .filter((p) => p.status === "upcoming")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">HKU CS Study Group</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A collaborative platform for HKU Computer Science students to share knowledge, present
            research, and grow together.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/presentations">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Presentations
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <Calendar size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Weekly Presentations</h4>
              <p className="text-gray-600">
                Regular knowledge sharing sessions where members present on various CS topics
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <BookOpen size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Resource Library</h4>
              <p className="text-gray-600">
                Curated collection of papers, articles, and learning materials
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <Image size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Event Gallery</h4>
              <p className="text-gray-600">
                Photos and memories from our group activities and events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Presentations */}
      {upcomingPresentations.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Upcoming Presentations</h3>
              <Link href="/presentations" className="text-blue-600 hover:underline">
                View All
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingPresentations.map((presentation) => (
                <div key={presentation.id} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h4 className="text-xl font-semibold mb-2">{presentation.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">by {presentation.speaker}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(presentation.date).toLocaleDateString()}
                  </p>
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

