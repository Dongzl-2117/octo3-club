import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">HKU CS Study Group</h4>
            <p className="text-gray-400">
              A collaborative platform for HKU Computer Science students to share knowledge and
              insights.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/presentations" className="text-gray-400 hover:text-white transition">
                  Presentations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">For inquiries, please contact the group administrators.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2025 HKU CS Study Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

