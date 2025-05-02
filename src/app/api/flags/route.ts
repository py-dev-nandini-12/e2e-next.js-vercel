import "@vercel/flags/next";

export async function GET() {
  const isEnabled = unstable_flag("WeatherWidgetEnabled", false);
  return new Response(JSON.stringify({ isEnabled }), {
    headers: { "Content-Type": "application/json" },
  });
}
function unstable_flag(flagName: string, defaultValue: boolean): boolean {
  // Simulate a feature flag check. In a real-world scenario, this might query a database or an external service.
  const featureFlags: Record<string, boolean> = {
    WeatherWidgetEnabled: true, // Example flag
  };

  return featureFlags[flagName] ?? defaultValue;
}
