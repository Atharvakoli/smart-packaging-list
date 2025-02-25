"use client";

import { useState } from "react";
import { TripPlannerForm, type Trip } from "@/components/trip-planner-form";
import { Trips } from "@/components/Trips";



const Trip = () => {
  const [savedTrips, setSavedTrips] = useState<Trip[]>([]);

  const handleSaveTrip = (newTrip: Trip) => {
    setSavedTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pack Smart, Travel Light</h1>
        <p className="text-lg text-gray-600 mb-12">
          Get personalized packing suggestions based on your destinations&apos;
          weather and your activities
        </p>
        <TripPlannerForm onSaveTrip={handleSaveTrip} />
      </section>
      <section className="mb-12">
        <Trips savedTrips={savedTrips} />
      </section>
    </div>
  );
}

export default Trip;