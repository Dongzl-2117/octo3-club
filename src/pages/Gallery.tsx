import { Image as ImageIcon, Camera } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import photosData from "../data/photos.json";
import type { Photo } from "../types";

const photos: Photo[] = photosData as Photo[];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/30 to-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Camera className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Gallery</h2>
          </div>
          <p className="text-xl text-pink-100 max-w-3xl">
            Capturing memorable moments from our group activities, workshops, and gatherings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-pink-50 rounded-lg flex-shrink-0">
                      <ImageIcon size={20} className="text-pink-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <Camera className="text-gray-400" size={40} />
            </div>
            <p className="text-gray-500 text-lg mb-2">No photos yet</p>
            <p className="text-gray-400">Exciting moments coming soon!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

