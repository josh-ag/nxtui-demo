import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Appbar from "./Components/Appbar";
import { ThemeProvider } from "./Context/themeContext";
import NextUiProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextUI-Demo",
  description: "NextUI demo project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NextUiProvider>
            <Appbar />
            {children}
          </NextUiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
