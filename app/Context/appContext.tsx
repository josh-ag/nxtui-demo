"use client";

// @imports
import React, { createContext, useState } from "react";

// @Intefaces
interface ContextInterface {
  theme: string;
  setTheme: (arg: string) => void;
}

export const AppContext = createContext<ContextInterface>({
  theme: "",
  setTheme: (arg: string) => arg,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
