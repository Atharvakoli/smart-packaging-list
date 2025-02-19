import { TripPlannerForm } from "@/components/trip-planner-form"
import { FeatureCards } from "@/components/feature-cards"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pack Smart, Travel Light</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get personalized packing suggestions based on your destination&apos;s weather and your activities
        </p>
        <TripPlannerForm />
      </section>
      <FeatureCards />
    </div>
  )
}

