import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Appbar from "./Components/Appbar";

import Providers from "./provider";

const font = Raleway({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
