"use client";

import WeatherWidget from "./weather-widget";
import TaskList from "./task-list";
import Header from "./header"; // Import the Header component
import Footer from "./footer"; // Import the Footer component
import { useState } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  const [darkMode, setDarkMode] = useState(false);

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
          {shouldInjectToolbar && <VercelToolbar />}

          <WeatherWidget />
          <TaskList />
        </main>
        <Footer />
      </body>
    </html>
  );
}
