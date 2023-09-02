"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProvider } from "./Context/appContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </AppProvider>
  );
}
