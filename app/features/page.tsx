import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    { name: "Weather Integration", path: "/features/weather-integration", icon: "☀️" },
    { name: "Smart Lists", path: "/features/smart-lists", icon: "📋" },
    { name: "AI Powered", path: "/features/ai-powered", icon: "🤖" },
    { name: "Destination Insights", path: "/features/destination-insights", icon: "🌎" },
    { name: "Trip Organization", path: "/features/trip-organization", icon: "🗓️" },
    { name: "Travel Safety", path: "/features/travel-safety", icon: "🛡️" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">SmartPack Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link key={feature.path} href={feature.path}>
            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{feature.name}</h2>
              <p className="text-gray-600">Click to learn more about this feature.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

