export default async function WeatherWidget() {
  const res = await fetch("/api/flags");
  const { isEnabled } = await res.json();

  if (!isEnabled) {
    return null; // Do not render the widget if the flag is disabled
  }

  const weatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true`
  ).then((res) => res.json());

  const { temperature, windspeed } = weatherData.current_weather;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <h3>Current Weather</h3>
      <p>Temperature: {temperature}°C</p>
      <p>Wind Speed: {windspeed} km/h</p>
    </div>
  );
}
