"use client";

import React, { useContext } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeContext } from "./Context/themeContext";

export default function NextUiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <NextUIProvider>
      <div className={`${theme} dark:bg-gray-800 dark:text-gray-50`}>
        {children}
      </div>
    </NextUIProvider>
  );
}
