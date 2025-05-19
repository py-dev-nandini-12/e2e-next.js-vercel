import { flag } from "flags/next";

export const weatherWidgetFlag = flag({
  key: "weather-widget",
  description: "Enable the weather widget for users.",
  decide: () => process.env.NEW_WEATHER_FLAG === "true",
});

export const animationFeatureFlag = flag<boolean>({
  key: "animation-feature",
  description: "Enable animations in the app.",
  decide: () => process.env.ANIMATION_FEATURE_ENABLED === "true",
});
