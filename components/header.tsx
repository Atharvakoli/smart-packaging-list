import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SmartPack</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
            How it Works
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

