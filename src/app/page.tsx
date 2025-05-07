import { weatherWidgetFlag } from "../../flags";
import WeatherWidget from "./weather-widget";
// import { animationFeatureFlag } from "../../flags";

export default async function Home() {
  const isWeatherWidgetEnabled = await weatherWidgetFlag();
  // const isAnimationFeatureEnabled = await animationFeatureFlag();

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
