import Header from "../components/Header";
import Footer from "../components/Footer";
import presentations from "../data/presentations.json";

export default function Presentations() {
  const upcoming = presentations.filter((p) => p.status === "upcoming");
  const past = presentations.filter((p) => p.status === "past");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Presentations</h2>

        {/* Upcoming Presentations */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-600">Upcoming Presentations</h3>
          {upcoming.length === 0 ? (
            <p className="text-gray-500">No upcoming presentations at the moment.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {upcoming.map((presentation) => (
                <div key={presentation.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-xl font-semibold mb-2">{presentation.title}</h4>
                  <p className="text-gray-600 mb-3">{presentation.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Speaker: {presentation.speaker}</p>
                    <p>Date: {new Date(presentation.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Past Presentations */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-gray-600">Past Presentations</h3>
          {past.length === 0 ? (
            <p className="text-gray-500">No past presentations yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {past.map((presentation) => (
                <div key={presentation.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-xl font-semibold mb-2">{presentation.title}</h4>
                  <p className="text-gray-600 mb-3">{presentation.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Speaker: {presentation.speaker}</p>
                    <p>Date: {new Date(presentation.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

