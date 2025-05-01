"use client";

import { createContext, useContext, useState } from "react";

type FlagsContextType = {
  showWeatherWidget: boolean;
  toggleWeatherWidget: () => void;
};

const FlagsContext = createContext<FlagsContextType | undefined>(undefined);

export const FlagsProvider = ({ children }: { children: React.ReactNode }) => {
  const [showWeatherWidget, setShowWeatherWidget] = useState(
    () => localStorage.getItem("showWeatherWidget") === "true"
  );

  const toggleWeatherWidget = () => {
    setShowWeatherWidget((prev) => {
      const newValue = !prev;
      localStorage.setItem("showWeatherWidget", String(newValue));
      return newValue;
    });
  };

  return (
    <FlagsContext.Provider value={{ showWeatherWidget, toggleWeatherWidget }}>
      {children}
    </FlagsContext.Provider>
  );
};

export const useFlags = () => {
  const context = useContext(FlagsContext);
  if (!context) {
    throw new Error("useFlags must be used within a FlagsProvider");
  }
  return context;
};
