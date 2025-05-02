import "@vercel/flags/next";

// Define your flags here
type Flag = {
  key: string;
  defaultValue: boolean;
  description: string;
};

export const flags = [
  {
    key: "WeatherWidgetEnabled",
    defaultValue: process.env.WEATHER_WIDGET_ENABLED === "true",
    description: "Enable the weather widget on the dashboard.",
  },
] as const satisfies readonly Flag[];

type FlagKey = (typeof flags)[number]["key"];

// Pre-compile the flags for client-side usage
const vercelFlags = flags.reduce((flagObj, { key, defaultValue }) => {
  flagObj[key] = async () => defaultValue;
  return flagObj;
}, {} as Record<FlagKey, () => Promise<boolean>>);

export const getFlag = (key: FlagKey) => vercelFlags[key]!();
