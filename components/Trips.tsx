export type Traveler = {
  gender: string;
  age: number;
};

export type Trip = {
  destination: string;
  travelers: Traveler[];
  startDate: Date | null;
  endDate: Date | null;
  activityType: string;
};

export function Trips({ savedTrips }: { savedTrips: Trip[] }) {
  if (savedTrips.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Saved Trips
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedTrips.map((trip, index) => (
          <div
            key={index}
            className="bg-blue-100 border border-gray-300 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-blue-200 p-2 rounded">
              {trip.destination.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-600 mb-3 bg-yellow-100 p-2 rounded">
              <span className="font-medium">Activity:</span> {trip.activityType}
            </p>
            <p className="text-sm text-gray-600 mb-3 bg-green-100 p-2 rounded">
              <span className="font-medium">Dates:</span>{" "}
              {trip.startDate?.toDateString()} - {trip.endDate?.toDateString()}
            </p>
            <div className="mt-4 bg-purple-100 p-2 rounded">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Travelers:
              </p>
              <ul className="space-y-1">
                {trip.travelers.map((traveler, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 bg-white p-1 rounded"
                  >
                    {traveler.gender}, {traveler.age} years old
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-6">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Generate Packing List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
