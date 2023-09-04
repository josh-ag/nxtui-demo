import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Providers from "./provider";
import NavbarComponent from "./Components/Navbar";

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
          {/* <Appbar />
           */}
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
