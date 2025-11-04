import { Calendar, User, Clock, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import presentationsData from "../data/presentations.json";
import type { Presentation } from "../types";

const presentations: Presentation[] = presentationsData as Presentation[];

export default function Presentations() {
  const upcoming = presentations.filter((p) => p.status === "upcoming");
  const past = presentations.filter((p) => p.status === "past");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Calendar className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Presentations</h2>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Explore our knowledge sharing sessions and learn cutting-edge technologies and research findings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Presentations */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-green-600" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Upcoming</h3>
          </div>
          
          {upcoming.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <Calendar className="text-gray-400" size={40} />
              </div>
              <p className="text-gray-500 text-lg">No upcoming presentations at the moment. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {upcoming.map((presentation, index) => (
                <Link
                  key={presentation.id}
                  href={`/presentations/${presentation.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-200 hover:border-green-400 hover:-translate-y-2 cursor-pointer block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Clock size={14} />
                        Coming Soon
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {presentation.title}
                    </h4>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {presentation.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <User size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Speaker</p>
                          <p className="font-semibold">{presentation.speaker}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Calendar size={18} className="text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="font-semibold">
                            {new Date(presentation.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Past Presentations */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="text-gray-600" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Past Presentations</h3>
          </div>
          
          {past.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <Calendar className="text-gray-400" size={40} />
              </div>
              <p className="text-gray-500 text-lg">No past presentations yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {past.map((presentation, index) => (
                <Link
                  key={presentation.id}
                  href={`/presentations/${presentation.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 hover:-translate-y-1 cursor-pointer block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 border-b border-gray-300">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {presentation.title}
                    </h4>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {presentation.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <User size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Speaker</p>
                          <p className="font-semibold">{presentation.speaker}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Calendar size={18} className="text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="font-semibold">
                            {new Date(presentation.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

