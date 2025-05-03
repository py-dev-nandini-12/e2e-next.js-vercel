import { flag } from "flags/next";

export const weatherWidgetFlag = flag({
  key: "weather-widget",
  decide() {
    return Math.random() > 0.5; // Example logic for deciding the flag
  },
});
