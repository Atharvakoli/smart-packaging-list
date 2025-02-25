"use client";

import type React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type Traveler = {
  gender: string;
  age: number;
};

export type Destination = {
  location: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type Trip = {
  destinations: Destination[];
  travelers: Traveler[];
  activityType: string;
};

type TripPlannerFormProps = {
  onSaveTrip: (trip: Trip) => void;
};

export function TripPlannerForm({ onSaveTrip }: TripPlannerFormProps) {
  const [destinations, setDestinations] = useState<Destination[]>([
    { location: "", startDate: null, endDate: null },
  ]);
  const [travelers, setTravelers] = useState<Traveler[]>([
    { gender: "", age: 0 },
  ]);
  const [activityType, setActivityType] = useState("");

  const handleAddDestination = () => {
    setDestinations([
      ...destinations,
      { location: "", startDate: null, endDate: null },
    ]);
  };

  const handleRemoveDestination = (index: number) => {
    const updatedDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(updatedDestinations);
  };

  const handleDestinationChange = (
    index: number,
    field: keyof Destination,
    value: string | Date | null
  ) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index] = {
      ...updatedDestinations[index],
      [field]: value,
    };
    setDestinations(updatedDestinations);
  };

  const handleAddTraveler = () => {
    setTravelers([...travelers, { gender: "", age: 0 }]);
  };

  const handleRemoveTraveler = (index: number) => {
    const updatedTravelers = travelers.filter((_, i) => i !== index);
    setTravelers(updatedTravelers);
  };

  const handleTravelerChange = (
    index: number,
    field: keyof Traveler,
    value: string | number
  ) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setTravelers(updatedTravelers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: Trip = {
      destinations,
      travelers,
      activityType,
    };
    onSaveTrip(newTrip);
    // Reset form
    setDestinations([{ location: "", startDate: null, endDate: null }]);
    setTravelers([{ gender: "", age: 0 }]);
    setActivityType("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Destinations
          </label>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="space-y-2 p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Destination {index + 1}</h3>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveDestination(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                value={destination.location}
                onChange={(e) =>
                  handleDestinationChange(index, "location", e.target.value)
                }
                placeholder="Enter city or location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
              <div className="flex space-x-2">
                <DatePicker
                  selected={destination.startDate}
                  onChange={(date) =>
                    handleDestinationChange(index, "startDate", date)
                  }
                  selectsStart
                  startDate={destination.startDate}
                  endDate={destination.endDate}
                  placeholderText="Start date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
                <DatePicker
                  selected={destination.endDate}
                  onChange={(date) =>
                    handleDestinationChange(index, "endDate", date)
                  }
                  selectsEnd
                  startDate={destination.startDate}
                  endDate={destination.endDate}
                  minDate={destination.startDate}
                  placeholderText="End date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDestination}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            + Add Destination
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Travelers
          </label>
          {travelers.map((traveler, index) => (
            <div key={index} className="flex items-center space-x-4">
              <select
                value={traveler.gender}
                onChange={(e) =>
                  handleTravelerChange(index, "gender", e.target.value)
                }
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number"
                min="0"
                value={traveler.age || ""}
                onChange={(e) =>
                  handleTravelerChange(
                    index,
                    "age",
                    Number.parseInt(e.target.value, 10)
                  )
                }
                placeholder="Age"
                className="flex-1 w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveTraveler(index)}
                  className="px-3 py-2 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTraveler}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            + Add Traveler
          </button>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="activityType"
            className="block text-sm font-medium text-gray-700"
          >
            Activity Type
          </label>
          <input
            id="activityType"
            type="text"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            placeholder="Enter activity type"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Save Trip
        </button>
      </form>
    </div>
  );
}
