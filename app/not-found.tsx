"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold">Whoops!</h2>
      <h4 className="text-lg">The page your looking for does not exist</h4>

      <Button as={Link} variant="ghost" href="/" className="mt-8">
        Return Home
      </Button>
    </div>
  );
}
