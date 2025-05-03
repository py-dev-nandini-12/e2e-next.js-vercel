import { weatherWidgetFlag } from "../../flags";
import WeatherClient from "./components/WeatherClient";

export default async function Home() {
  const isWeatherWidgetEnabled = await weatherWidgetFlag();

  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      {isWeatherWidgetEnabled ? (
        <WeatherClient isEnabled={isWeatherWidgetEnabled} />
      ) : (
        <p>🚫 Feature X is OFF</p>
      )}
    </div>
  );
}
