import { flag } from "flags/next";

export const animationFeatureFlag = flag<boolean>({
  key: "animation-feature",
  description: "Enable animations in the app.",
  decide: () => {
    const isEnabled = process.env.ANIMATION_FEATURE_ENABLED === "true";
    console.log("Animation Feature Flag Enabled:", isEnabled);
    return isEnabled;
  },
});
