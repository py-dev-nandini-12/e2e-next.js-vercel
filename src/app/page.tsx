import Link from "next/link";
import WeatherWidget from "./weather-widget";

export default async function Home() {
  const isWeatherFeatureEnabled = process.env.WEATHER_WIDGET_ENABLED === "true";

  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      <Link href="/form">Go to Form</Link>
      {isWeatherFeatureEnabled && <WeatherWidget />}
    </div>
  );
}
