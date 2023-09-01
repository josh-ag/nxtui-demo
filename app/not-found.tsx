"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold">Whoops!</h2>
      <h4 className="text-lg">The page your looking for does not exist</h4>

      <Link
        href="/"
        className="px-4 py-1 rounded-md mt-8 bg-gray-200 text-gray-700"
      >
        Return Home
      </Link>
    </div>
  );
}
