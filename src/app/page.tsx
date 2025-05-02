import Link from "next/link";
import WeatherWidget from "./weather-widget";
import { getFeature } from "@vercel/flags";

export default async function Home() {
  const isWeatherFeatureEnabled = getFeature("FEATURE_WEATHER_WIDGET");

  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      <Link href="/form">Go to Form</Link>
      {isWeatherFeatureEnabled && <WeatherWidget />}
    </div>
  );
}
