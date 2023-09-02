"use client";

import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Link as UiLink } from "@nextui-org/react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Appbar() {
  //@Internal state
  const [mounted, setMounted] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeIcon = theme === "light" ? <IoMoon /> : <IoSunny />;

  const toggleTheme = () => {
    if (theme === "light") return setTheme("dark");
    return setTheme("light");
  };

  return (
    <div className="bg-blue-500 h-14 flex items-center justify-center px-4">
      <div className="container mx-auto flex items-center justify-between">
        <UiLink
          as={Link}
          href="/"
          className="font-semibold text-2xl text-gray-100"
        >
          NextUI Demo
        </UiLink>

        <div className="flex space-x-2 items-center">
          <Button
            variant="flat"
            as={Link}
            href="/about"
            className="font-medium"
          >
            About
          </Button>
          <Button
            variant="flat"
            onClick={toggleTheme}
            className="light:text-gray-700"
          >
            {themeIcon}
          </Button>
        </div>
      </div>
    </div>
  );
}
