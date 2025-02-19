export default function AIPoweredPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">AI-Powered Recommendations</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-600">
          SmartPack leverages cutting-edge artificial intelligence to provide you with the best packing recommendations.
          Here's how our AI works for you:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            Machine learning algorithms: Analyze vast amounts of travel data to identify optimal packing patterns.
          </li>
          <li>Natural language processing: Understands your specific needs based on your input and preferences.</li>
          <li>Predictive analytics: Anticipates potential needs based on your destination and activities.</li>
          <li>Continuous improvement: Our AI learns from each trip to refine and improve its recommendations.</li>
          <li>Personalization: Adapts to your individual packing style and preferences over time.</li>
        </ul>
        <p className="text-gray-600">
          With SmartPack's AI-powered recommendations, you benefit from collective travel wisdom and cutting-edge
          technology, ensuring you're always perfectly packed.
        </p>
      </div>
    </div>
  )
}

