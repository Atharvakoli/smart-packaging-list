import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About SmartPack</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            SmartPack was created with a simple mission: to make travel preparation effortless and stress-free. We
            combine cutting-edge technology with practical travel experience to help you pack smart and travel light.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe that the joy of travel shouldn't be diminished by the stress of packing. Our AI-powered platform
            provides personalized packing suggestions based on real-time weather data, your activities, and the
            collective wisdom of experienced travelers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose SmartPack?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>Personalized packing lists tailored to your specific trip</li>
            <li>Real-time weather integration for accurate packing suggestions</li>
            <li>AI-powered recommendations that improve over time</li>
            <li>User-friendly interface for easy trip planning</li>
            <li>Community-driven insights from experienced travelers</li>
          </ul>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Start?</h2>
            <p className="text-gray-600">
              Join thousands of happy travelers who have simplified their packing process with SmartPack.
            </p>
            <div className="flex gap-4">
              <Link href="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

