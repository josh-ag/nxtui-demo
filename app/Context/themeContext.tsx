"use client";

// @imports
import React, { createContext, useState } from "react";

// @Intefaces
interface ContextInterface {
  theme: string;
  setTheme: (arg: string) => void;
}

export const ThemeContext = createContext<ContextInterface>({
  theme: "",
  setTheme: (arg: string) => arg,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
