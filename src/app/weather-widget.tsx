import { useState, useEffect } from "react";

export default function WeatherWidget() {
  interface Weather {
    temperature: number;
    windspeed: number;
  }

  const [weather, setWeather] = useState<Weather | null>(null);
  const [city] = useState("New York");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();
      setWeather(data.current_weather);
    } catch {
      setError("Unable to fetch weather data.");
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <h3>Weather in {city}</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
