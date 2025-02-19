"use client"

import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export function TripPlannerForm() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [activityType, setActivityType] = useState("")
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false)

  const activities = ["Business", "Leisure", "Adventure", "Beach"]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Enter city or location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">
              Number of Travelers
            </label>
            <input
              id="travelers"
              type="number"
              min="1"
              placeholder="Enter number of travelers"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Travel Dates</label>
            <div className="flex space-x-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Activity Type</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsActivityDropdownOpen(!isActivityDropdownOpen)}
                className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                {activityType || "Select activity type"}
              </button>
              {isActivityDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {activities.map((activity) => (
                    <button
                      key={activity}
                      type="button"
                      onClick={() => {
                        setActivityType(activity)
                        setIsActivityDropdownOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Generate Packing List
        </button>
      </form>
    </div>
  )
}

