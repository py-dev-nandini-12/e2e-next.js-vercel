'use client";';

import { useEffect, useState } from "react";
import WeatherWidget from "./weather-widget";

export default function Home() {
  const [isFeatureXEnabled, setIsFeatureXEnabled] = useState(false);

  useEffect(() => {
    setIsFeatureXEnabled(process.env.NEXT_PUBLIC_FEATURE_X_ENABLED === "true");
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      {isFeatureXEnabled ? <WeatherWidget /> : <p>🚫 Feature X is OFF</p>}
    </div>
  );
}
