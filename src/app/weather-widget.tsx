"use client";
import { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchWeather(location.latitude, location.longitude);
    }
  }, [location]);

  interface WeatherData {
    temperature: number;
    windspeed: number;
  }

  const fetchWeather = async (
    latitude: number,
    longitude: number
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data: { current_weather: WeatherData } = await response.json();
      setWeather(data.current_weather);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch weather data.");
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <h3>Current Weather</h3>
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
