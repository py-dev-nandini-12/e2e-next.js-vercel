"use server";

import { flag } from "flags/next";

export const weatherWidgetFlag = flag({
  key: "weather-widget",
  decide() {
    return false; // Example logic for deciding the flag
  },
});
