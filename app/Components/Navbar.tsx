"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarContent,
  Link as UILink,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function NavbarComponent() {
  //@Internal state
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();

  const themeIcon = theme === "light" ? <IoMoon /> : <IoSunny />;

  const toggleTheme = () => {
    if (theme === "light") return setTheme("dark");
    return setTheme("light");
  };

  const pathname = usePathname();
  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Activity", path: "/activity" },
    { name: "Analytics", path: "/analytics" },
    { name: "System", path: "/system" },
    { namee: "Deployments", path: "/deployments" },
    { name: "My Settings", path: "/settings" },
    { name: "Team Settings", path: "/teamsetting" },
    { name: "Help & Feedback", path: "/help" },
  ];
  const navbarLinks = [
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="shadow-sm"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "menu close" : "menu open"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-lg text-inherit">
            NextUI Demo
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarLinks.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <NavbarItem key={index}>
              <UILink
                as={Link}
                href={link.path}
                color={isActive ? "primary" : "foreground"}
                className="hover:text-primary"
              >
                {link.name}
              </UILink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <UILink as={Link} href="/signup">
            Sign Up
          </UILink>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/signin" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="flat"
            onClick={toggleTheme}
            className="light:text-gray-700"
          >
            {themeIcon}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <NavbarMenuItem key={index}>
              <UILink
                as={Link}
                color={isActive ? "primary" : "foreground"}
                className={`w-full hover:text-primary active:text-primary`}
                size="lg"
                href={item.path}
              >
                {item.name}
              </UILink>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <UILink
            as={Link}
            color="danger"
            className={`w-full`}
            size="lg"
            href="/logout"
          >
            Logout
          </UILink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
