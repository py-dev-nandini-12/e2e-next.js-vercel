import { animationFeatureFlag } from "./flags";
import AnimatedBox from "../components/AnimatedBox";

export default async function AnimationPage() {
  const isAnimationFeatureEnabled = await animationFeatureFlag();

  return (
    <div>
      <h1>Animation Feature Page</h1>
      {isAnimationFeatureEnabled ? (
        <div>
          <h2>Animation is Enabled</h2>
          <AnimatedBox />
        </div>
      ) : (
        <p>🚫 Animation Feature is OFF</p>
      )}
    </div>
  );
}
