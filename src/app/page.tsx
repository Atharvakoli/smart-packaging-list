"use client";

import { useState } from "react";
import { TripPlannerForm } from "@/components/trip-planner-form";
import { FeatureCards } from "@/components/feature-cards";
import { Trips } from "@/components/Trips";

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

export default function Home() {
  const [savedTrips, setSavedTrips] = useState<Trip[]>([]);

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12 ">
        <h1 className="text-4xl font-bold mb-4">Pack Smart, Travel Light</h1>
        <p className="text-lg text-gray-600 mb-12">
          Get personalized packing suggestions based on your destination&apos;s
          weather and your activities
        </p>
        <TripPlannerForm
          savedTrips={savedTrips}
          setSavedTrips={setSavedTrips}
        />
      </section>
      <section className="text-center mb-12">
        <Trips savedTrips={savedTrips} />
      </section>
      <FeatureCards />
    </div>
  );
}
