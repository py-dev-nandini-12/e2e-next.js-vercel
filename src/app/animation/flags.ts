import { flag } from "flags/next";

export const animationFeatureFlag = flag<boolean>({
  key: "animation-feature",
  description: "Enable animations in the app.",
  decide: () => false,
});
