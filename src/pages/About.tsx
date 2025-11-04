import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The HKU CS Study Group is a collaborative platform designed to foster knowledge sharing
            and academic growth among Computer Science students at the University of Hong Kong. We
            believe in the power of peer learning and collective intelligence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through weekly presentations, curated resources, and community events, we aim to create
            an environment where students can explore new ideas, share their research, and develop
            both technical and presentation skills.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Weekly Presentations:</strong> Members present on various CS topics,
                research projects, or interesting technologies
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Resource Sharing:</strong> Curate and share valuable learning materials,
                papers, and online courses
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Community Events:</strong> Organize workshops, hackathons, and social
                gatherings
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Peer Learning:</strong> Foster a supportive environment for asking
                questions and collaborative problem-solving
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We welcome all HKU Computer Science students who are passionate about learning and
            sharing knowledge. Whether you're interested in algorithms, machine learning, web
            development, or any other CS topic, there's a place for you in our community.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more information about joining the group or presenting at our sessions, please
            contact the group administrators.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

