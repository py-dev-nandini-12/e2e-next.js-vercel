"use client";

import WeatherWidget from "./weather-widget";
import TaskList from "./task-list";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  // Access the Vercel flag
  const showWeatherWidget =
    process.env.NEXT_PUBLIC_SHOW_WEATHER_WIDGET === "true";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html
      lang="en"
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <body>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main>
          {children}
          {showWeatherWidget && <WeatherWidget />}
          <TaskList />
        </main>
        <Footer />
      </body>
    </html>
  );
}
