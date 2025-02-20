import Link from "next/link";

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <Link
        href="/features/weather-integration"
        className="p-6 bg-white rounded-lg border shadow-sm"
      >
        <div className="mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Weather Integration</h3>
        <p className="text-gray-600">
          Get suggestions based on real-time weather forecast at your
          destination
        </p>
      </Link>

      <Link
        href="/features/smart-lists"
        className="p-6 bg-white rounded-lg border shadow-sm"
      >
        <div className="mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Smart Lists</h3>
        <p className="text-gray-600">
          Customized packing lists based on your activities and preferences
        </p>
      </Link>

      <Link
        href="/features/ai-powered"
        className="p-6 bg-white rounded-lg border shadow-sm"
      >
        <div className="mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">AI Powered</h3>
        <p className="text-gray-600">
          Continuously improving suggestions based on user feedback
        </p>
      </Link>
    </div>
  );
}
