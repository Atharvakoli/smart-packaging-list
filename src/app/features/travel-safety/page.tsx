export default function TravelSafetyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Travel Safety</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-600">
          SmartPack prioritizes your safety by providing essential travel safety recommendations:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>Health and medical: Recommendations for necessary medications and health-related items.</li>
          <li>
            Travel advisories: Up-to-date information on any safety concerns or travel warnings for your destination.
          </li>
          <li>Emergency preparedness: Suggestions for items to pack in case of emergencies.</li>
          <li>Digital security: Tips and recommendations for protecting your digital information while traveling.</li>
          <li>Local emergency information: Provides important local emergency contact numbers and information.</li>
        </ul>
        <p className="text-gray-600">
          With SmartPack's Travel Safety features, you can travel with peace of mind, knowing you're prepared for
          various situations.
        </p>
      </div>
    </div>
  )
}

