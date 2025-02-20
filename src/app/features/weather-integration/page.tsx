import WeatherSearch from "@/components/WeatherSearch";

export default function WeatherIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Weather Integration
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-600">
          SmartPack's weather integration feature ensures that you're always
          prepared for the climate at your destination. Here's how it works:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            Real-time weather data: We fetch the latest weather forecasts for
            your destination.
          </li>
          <li>
            Historical analysis: We analyze past weather patterns to predict
            potential variations.
          </li>
          <li>
            Seasonal considerations: Our system takes into account the season of
            your travel dates.
          </li>
          <li>
            Microclimate awareness: We consider local geographical features that
            might affect weather.
          </li>
          <li>
            Dynamic updates: Your packing list adjusts as the forecast changes
            closer to your departure date.
          </li>
        </ul>
        <p className="text-gray-600">
          With SmartPack's weather integration, you'll never be caught off guard
          by unexpected weather conditions during your trip.
        </p>
      </div>
      <WeatherSearch />
    </div>
  );
}
