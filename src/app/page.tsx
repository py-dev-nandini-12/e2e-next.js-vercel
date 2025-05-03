import { weatherWidgetFlag } from "./flags";
import WeatherClient from "./components/WeatherClient";

export default async function Page() {
  const isWeatherWidgetEnabled = await weatherWidgetFlag();

  return <div>{isWeatherWidgetEnabled ? "Flag is on" : "Flag is off"}</div>;
}
