import axios from "axios";
import "dotenv/config";

export const axiosInstanceForWeather = axios.create({
  baseURL: process.env.MET_OFFICE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
