export default function SmartListsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Smart Lists</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-600">
          SmartPack's Smart Lists feature revolutionizes the way you pack for your trips. Here's what makes our lists so
          smart:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>Personalized recommendations: Based on your trip details, activities, and preferences.</li>
          <li>Quantity suggestions: We recommend how many of each item you should pack.</li>
          <li>Category organization: Items are neatly categorized for easy packing and checking.</li>
          <li>Adaptive learning: Our system learns from your feedback to improve future recommendations.</li>
          <li>
            Multi-trip optimization: For multi-destination trips, we optimize your packing list to cover all locations.
          </li>
        </ul>
        <p className="text-gray-600">
          With SmartPack's Smart Lists, you'll have the perfect packing list tailored specifically to your travel needs.
        </p>
      </div>
    </div>
  )
}

