import { flag } from "flags/next";

export const weatherWidgetFlag = flag<boolean>({
  key: "weather-widget",
  decide: () => process.env.NEXT_PUBLIC_FEATURE_X_ENABLED === "true",
});
