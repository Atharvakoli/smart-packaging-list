import {
  ErrorWithMessage,
  formatError,
  forecastWeather,
  parseDateRange,
} from "@/service/index.service";
import { NextRequest, NextResponse } from "next/server";

async function getForecastWeather(
  location: string,
  numberOfDays: number,
  country: string,
  dateRange: string
) {
  try {
    const { month, date, year, tillMonth, tillDay, tillYear } =
      parseDateRange(dateRange);

    const response = await forecastWeather(
      numberOfDays,
      location,
      country,
      month,
      date,
      year,
      tillMonth,
      tillDay,
      tillYear
    );
    return response;
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const location = req.nextUrl.searchParams.get("location");
    const date1 = req.nextUrl.searchParams.get("date1");
    const date2 = req.nextUrl.searchParams.get("date2");
    const country = req.nextUrl.searchParams.get("country");

    if (!location || typeof location !== "string") {
      return NextResponse.json(
        { message: "Location is required" },
        { status: 400 }
      );
    }

    if (
      !date1 ||
      !date2 ||
      typeof date1 !== "string" ||
      typeof date2 !== "string"
    ) {
      return NextResponse.json(
        { message: "Start and end dates are required in format DD-MM-YYYY" },
        { status: 400 }
      );
    }

    if (!country || typeof country !== "string") {
      return NextResponse.json(
        { message: "Country is required" },
        { status: 400 }
      );
    }

    const startDate = new Date(date1);
    const endDate = new Date(date2);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return NextResponse.json(
        { message: "Invalid date format. Use YYYY-MM-DD" },
        { status: 400 }
      );
    }

    const numberOfDays =
      Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;

    const dateRange = `${date1} to ${date2}`;

    const forecastWeatherData = await getForecastWeather(
      location,
      numberOfDays,
      country,
      dateRange
    );

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
