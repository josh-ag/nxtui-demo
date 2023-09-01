"use client";

import { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Link as UiLink } from "@nextui-org/react";
import Link from "next/link";
import { ThemeContext } from "../Context/themeContext";

export default function Appbar() {
  // @useContext
  const { theme, setTheme } = useContext(ThemeContext);

  const themeIcon = theme === "light" ? <IoMoon /> : <IoSunny />;

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        "light";
    }
  };

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold text-2xl">
          NextUI Demo
        </Link>

        <div className="flex space-x-2 items-center">
          <Button
            variant="faded"
            as={Link}
            href="/about"
            className="font-medium"
          >
            About
          </Button>
          <Button variant="faded" onClick={toggleTheme}>
            {themeIcon}
          </Button>
        </div>
      </div>
    </div>
  );
}
