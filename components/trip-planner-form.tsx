"use client";

import type React from "react";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

type TripPlannerFormProps = {
  savedTrips: Trip[];
  setSavedTrips: React.Dispatch<React.SetStateAction<Trip[]>>;
};

export function TripPlannerForm({
  savedTrips,
  setSavedTrips,
}: TripPlannerFormProps) {
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState<Traveler[]>([
    { gender: "", age: 0 },
  ]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activityType, setActivityType] = useState("");

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
      destination,
      travelers,
      startDate,
      endDate,
      activityType,
    };
    setSavedTrips([...savedTrips, newTrip]);
    // Reset form
    setDestination("");
    setTravelers([{ gender: "", age: 0 }]);
    setStartDate(null);
    setEndDate(null);
    setActivityType("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700"
          >
            Destination
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter city or location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Travel Dates
            </label>
            <div className="flex space-x-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
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
