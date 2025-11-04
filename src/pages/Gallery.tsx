import Header from "../components/Header";
import Footer from "../components/Footer";
import photos from "../data/photos.json";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
        <p className="text-gray-600 mb-8">
          Memories from our group activities, workshops, and events
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

