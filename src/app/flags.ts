import { flag } from "flags/next";

export const weatherWidgetFlag = flag({
  key: "weather-widget",
  description: "Enable the weather widget for users.",
  decide: () => process.env.NEW_WEATHER_FLAG === "true",
});
