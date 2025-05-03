import { flag } from "flags/next";

export const weatherWidgetFlag = flag<boolean>({
  key: "Weather Widget",
  description: "A Weather Widget feature flag",
  decide() {
    return false;
  }, // Default to false
});
