import { axiosInstanceForWeather } from "@/lib/index.axios";
import "dotenv/config";

export interface ErrorWithMessage {
  message: string | object;
  name?: string;
  errors?: Record<string, { message: string }>;
  meta?: {
    target?: string[];
  };
}

export function formatError(error: ErrorWithMessage): string {
  // Handle validation errors with multiple field errors
  if (error.errors) {
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors![field].message
    );
    return fieldErrors.join(". ");
  }

  // Handle generic errors
  return typeof error.message === "string"
    ? error.message
    : JSON.stringify(error.message);
}

export async function weather(location: string) {
  const weather = await axiosInstanceForWeather.get(
    `/${location}?key=${process.env.MET_OFFICE_API_KEY}`
  );
  return weather;
}
