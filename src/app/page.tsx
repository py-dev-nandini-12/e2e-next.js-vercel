import { weatherWidgetFlag } from "./flags";
import WeatherWidget from "./weather-widget";

export default async function Home() {
  const isWeatherWidgetEnabled = await weatherWidgetFlag();

  return (
    <div>
      <h1>Weather Widget</h1>
      {isWeatherWidgetEnabled ? (
        <WeatherWidget />
      ) : (
        <p>🚫 Weather Widget is OFF</p>
      )}
    </div>
  );
}
