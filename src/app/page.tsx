import { useEffect, useState } from "react";
import { weatherWidgetFlag } from "./flags";

export default function Page() {
  const [isWeatherWidgetEnabled, setIsWeatherWidgetEnabled] = useState(false);

  useEffect(() => {
    async function fetchFlag() {
      const flag = await weatherWidgetFlag();
      setIsWeatherWidgetEnabled(flag);
    }
    fetchFlag();
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js + Playwright</h1>
      {isWeatherWidgetEnabled ? (
        <p>🎉 Weather Widget is ON</p>
      ) : (
        <p>🚫 Weather Widget is OFF</p>
      )}
    </div>
  );
}
