interface WeatherClientProps {
  isEnabled: boolean;
}

export default function WeatherClient({ isEnabled }: WeatherClientProps) {
  return (
    <div>
      {isEnabled ? "Weather Widget Enabled" : "Weather Widget Disabled"}
    </div>
  );
}
