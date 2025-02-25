import axios from "axios";
import "dotenv/config";

export const axiosInstanceForWeather = axios.create({
  baseURL: process.env.OPEN_WEATHER_MAP_BASE_URL,
});
