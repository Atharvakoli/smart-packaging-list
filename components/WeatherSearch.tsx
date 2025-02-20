"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import weatherBanner from "@/public/images/weather-banner.jpeg";

export default function WeatherSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const storedSearches = JSON.parse(
      localStorage.getItem("recentSearches") || "[]"
    );
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const updatedSearches = [
        searchQuery,
        ...recentSearches.filter((s) => s !== searchQuery),
      ].slice(0, 5); // Keep only last 5 searches

      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

      setSearchQuery("");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url("${weatherBanner.src}")` }}
    >
      <div className="w-full max-w-2xl space-y-8 bg-black/50 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Find a Forecast
        </h1>

        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a place"
            className="w-full px-4 py-3 pr-12 rounded-lg bg-white/20 placeholder-white/70 border border-white/30
                      focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
          >
            <Search className="w-6 h-6 text-white" />
          </button>
        </form>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-white">
            Your Recent Places
          </h2>
          <div className="border border-dashed border-white/30 rounded-lg p-6 bg-white/10">
            {recentSearches.length > 0 ? (
              <ul className="space-y-2">
                {recentSearches.map((search, index) => (
                  <li
                    key={index}
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {search}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-white/80">
                Your recently searched places will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
