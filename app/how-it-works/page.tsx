import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">How SmartPack Works</h1>
      <div className="max-w-3xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Enter Your Trip Details</h2>
          <p className="text-gray-600 mb-4">
            Start by providing your destination, travel dates, number of travelers, and the type of activities you'll be
            doing.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. AI-Powered Analysis</h2>
          <p className="text-gray-600 mb-4">
            Our advanced AI analyzes your trip details, considering factors like weather forecasts, local customs, and
            activity requirements.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Customized Packing List</h2>
          <p className="text-gray-600 mb-4">
            Receive a personalized packing list tailored to your specific trip, ensuring you have everything you need
            without overpacking.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Smart Adjustments</h2>
          <p className="text-gray-600 mb-4">
            As your trip approaches, SmartPack continuously updates your list based on the latest weather forecasts and
            travel advisories.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Travel with Confidence</h2>
          <p className="text-gray-600 mb-4">
            Pack your bags using your SmartPack list and enjoy your trip, knowing you're prepared for anything.
          </p>
        </section>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try SmartPack Now
          </Link>
        </div>
      </div>
    </div>
  )
}

