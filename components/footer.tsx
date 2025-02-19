import Link from "next/link"
import { Github, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">SmartPack</h3>
            <p className="text-sm text-gray-600">Your intelligent travel companion for stress-free packing</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features/weather" className="text-gray-600 hover:text-gray-900">
                  Weather Integration
                </Link>
              </li>
              <li>
                <Link href="/features/smart-lists" className="text-gray-600 hover:text-gray-900">
                  Smart Lists
                </Link>
              </li>
              <li>
                <Link href="/features/travel-tips" className="text-gray-600 hover:text-gray-900">
                  Travel Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 SmartPack. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

