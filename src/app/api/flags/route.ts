import { NextResponse } from "next/server";

export async function GET() {
  const isEnabled = unstable_flag("WeatherWidgetEnabled", false);
  return NextResponse.json({ isEnabled });
}

function unstable_flag(flagName: string, defaultValue: boolean): boolean {
  // Simulate a feature flag check. In a real-world scenario, this might query a database or an external service.
  const featureFlags: Record<string, boolean> = {
    WeatherWidgetEnabled: true, // Example flag
  };

  if (!(flagName in featureFlags)) {
    console.warn(`Feature flag "${flagName}" not found. Using default value.`);
  }

  return featureFlags[flagName] ?? defaultValue;
}
