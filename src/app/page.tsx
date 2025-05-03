import { weatherWidgetFlag } from "./flags";
import WeatherClient from "./components/WeatherClient";

export default async function Page() {
  const isWeatherWidgetEnabled = await weatherWidgetFlag();

  return (
    <div>
      <h1>Welcome to Next.js + Playwright</h1>
      <WeatherClient isEnabled={isWeatherWidgetEnabled} />
    </div>
  );
}
