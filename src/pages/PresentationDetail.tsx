import { useParams, useLocation } from "wouter";
import { Calendar, User, ArrowLeft, Download, Play, FileText, Tag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import presentationsData from "../data/presentations.json";
import type { Presentation } from "../types";
import { getFileIcon, getFileColor, getFileTypeName } from "../utils/fileIcons";

const presentations: Presentation[] = presentationsData as Presentation[];

export default function PresentationDetail() {
  const params = useParams();
  const id = params.id;
  const [, setLocation] = useLocation();
  
  const presentation = presentations.find((p) => p.id === id);

  if (!presentation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Presentation Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the presentation you're looking for.</p>
            <button
              onClick={() => setLocation("/presentations")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Presentations
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isUpcoming = presentation.status === "upcoming";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Header />

      {/* Page Header */}
      <div className={`${isUpcoming ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-gray-600 to-gray-800'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setLocation("/presentations")}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Presentations
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            {isUpcoming && (
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                <Calendar size={16} />
                Coming Soon
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {presentation.title}
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {presentation.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Detailed Description */}
            {presentation.detailedDescription && (
              <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Detailed Description</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {presentation.detailedDescription}
                  </p>
                </div>
              </section>
            )}

            {/* Topics */}
            {presentation.topics && presentation.topics.length > 0 && (
              <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Tag className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Topics Covered</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presentation.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Recording */}
            {presentation.recording && (
              <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-50 rounded-lg">
                    <Play className="text-pink-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Recording</h2>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {presentation.recording.includes('youtube.com') || presentation.recording.includes('youtu.be') ? (
                    <iframe
                      src={presentation.recording.replace('watch?v=', 'embed/')}
                      className="w-full h-full"
                      allowFullScreen
                      title="Presentation Recording"
                    ></iframe>
                  ) : (
                    <video controls className="w-full h-full">
                      <source src={presentation.recording} />
                    </video>
                  )}
                </div>
              </section>
            )}

            {/* Presentation Files */}
            {presentation.slides && presentation.slides.length > 0 && (
              <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <FileText className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Presentation Files</h2>
                </div>
                <div className="space-y-3">
                  {presentation.slides.map((file, index) => {
                    const fileColor = getFileColor(file.type);
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${fileColor.bg}`}>
                            {getFileIcon(file.type, 24)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{file.name}</h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`text-xs font-medium ${fileColor.text}`}>
                                {getFileTypeName(file.type)}
                              </span>
                              {file.size && (
                                <span className="text-xs text-gray-500">{file.size}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            title="View"
                          >
                            <FileText size={20} />
                          </a>
                          <a
                            href={file.url}
                            download
                            className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                            title="Download"
                          >
                            <Download size={20} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Additional Materials */}
            {presentation.materials && presentation.materials.length > 0 && (
              <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Download className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Additional Materials</h2>
                </div>
                <div className="space-y-3">
                  {presentation.materials.map((file, index) => {
                    const fileColor = getFileColor(file.type);
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${fileColor.bg}`}>
                            {getFileIcon(file.type, 24)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{file.name}</h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`text-xs font-medium ${fileColor.text}`}>
                                {getFileTypeName(file.type)}
                              </span>
                              {file.size && (
                                <span className="text-xs text-gray-500">{file.size}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            title="View"
                          >
                            <FileText size={20} />
                          </a>
                          <a
                            href={file.url}
                            download
                            className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                            title="Download"
                          >
                            <Download size={20} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Presentation Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Speaker</p>
                    <p className="font-semibold text-gray-900">{presentation.speaker}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0">
                    <Calendar size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(presentation.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    {presentation.slides && presentation.slides.length > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Presentation Files</span>
                        <span className="font-semibold text-gray-900">{presentation.slides.length}</span>
                      </div>
                    )}
                    {presentation.materials && presentation.materials.length > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Additional Materials</span>
                        <span className="font-semibold text-gray-900">{presentation.materials.length}</span>
                      </div>
                    )}
                    {presentation.recording && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Recording</span>
                        <span className="font-semibold text-green-600">✓ Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

