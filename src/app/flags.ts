import { flag } from "flags/next";

export const weatherWidgetFlag = flag<boolean>({
  key: "weather-widget",
  description: "Enable the weather widget for users.",
  decide: () => process.env.NEXT_PUBLIC_FEATURE_X_ENABLED === "true",
});
