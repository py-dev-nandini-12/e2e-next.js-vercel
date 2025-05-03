"use server";

import { flag } from "flags/next";

export const weatherWidgetFlag = flag({
  key: "weather-widget",
  decide() {
    // Enable the weather widget for 50% of visitors
    return Math.random() > 0.5;
  },
});
