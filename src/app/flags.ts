import { flag } from "@vercel/flags/next";

export const weatherWidgetFlag = flag<boolean>({
  key: "Weather Widget",
  decide: () => false, // Default to false
});
