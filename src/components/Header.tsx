import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700">
              HKU CS Study Group
            </h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/presentations" className="text-gray-700 hover:text-blue-600 transition">
              Presentations
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition">
              Resources
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

