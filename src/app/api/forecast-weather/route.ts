import {
  ErrorWithMessage,
  formatError,
  forecastWeather,
} from "@/service/index.service";
import { NextRequest, NextResponse } from "next/server";

async function getForecastWeather(location: string) {
  try {
    const response = await forecastWeather(location);
    return response?.data || null;
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const location = req.nextUrl.searchParams.get("location");

    if (!location || typeof location !== "string") {
      return NextResponse.json(
        { message: "Location is required" },
        { status: 400 }
      );
    }

    const forecastWeatherData = await getForecastWeather(location);

    if (!forecastWeatherData) {
      return NextResponse.json(
        { message: "Weather data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ weather: forecastWeatherData }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: `Something went wrong: ${formatError(
          error as ErrorWithMessage
        )}`,
      },
      { status: 500 }
    );
  }
}
