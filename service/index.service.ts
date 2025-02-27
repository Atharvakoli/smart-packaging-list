import OpenAI from "openai";
import "dotenv/config";
import { axiosInstanceForWeather } from "@/lib/index.axios";

if (!process.env.OPENAI_API_KEY) {
  throw new Error(
    "Missing OpenAI API Key. Set OPENAI_API_KEY in your environment variables."
  );
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

export function parseDateRange(dateRange: string): {
  days: number;
  month: string;
  date: number;
  year: number;
  tillMonth: string;
  tillDay: number;
  tillYear: number;
} {
  const [startDate, endDate] = dateRange.split(" to ");

  const [startDay, startMonth, startYear] = startDate.split("-").map(Number);
  const [endDay, endMonth, endYear] = endDate.split("-").map(Number);

  if (
    !startYear ||
    !startMonth ||
    !startDay ||
    !endYear ||
    !endMonth ||
    !endDay
  ) {
    throw new Error(
      "Invalid date format. Expected format: DD-MM-YYYY to DD-MM-YYYY"
    );
  }

  const start = new Date(startYear, startMonth - 1, startDay);
  const end = new Date(endYear, endMonth - 1, endDay);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error("Invalid date values provided.");
  }

  const diffTime =
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return {
    days: diffTime,
    month: start.toLocaleString("en-US", { month: "long" }),
    date: startDay,
    year: startYear,
    tillMonth: end.toLocaleString("en-US", { month: "long" }),
    tillDay: endDay,
    tillYear: endYear,
  };
}

export async function currentWeather(location: string) {
  const weather = axiosInstanceForWeather.get(
    `/weather/?q=${location}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );
  return weather;
}

export async function forecastWeather(
  days: number,
  location: string,
  country: string,
  month: string,
  date: number,
  year: number,
  tillMonth: string,
  tillDay: number,
  tillYear: number
) {
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `${days}-day weather forecast for ${location}, ${country} from ${month} ${date}, ${year}, to ${tillMonth} ${tillDay}, ${tillYear}, in JSON format with maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, avgtemp_c, avgtemp_f, maxwind_mph, maxwind_kph, totalprecip_mm, totalprecip_in, avgvis_km, avgvis_miles, avghumidity, text, icon, code, daily_will_it_rain, daily_will_it_snow, daily_chance_of_rain, daily_chance_of_snow, uv, totalsnow_cm.`,
      max_tokens: 250,
    });

    return response.choices[0]?.text.trim() || "No response";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to fetch weather forecast.");
  }
}
