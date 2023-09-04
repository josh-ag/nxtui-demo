"use client";

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-screen h-screen flex items-center justify-center flex-col">
      <h2 className="text-5xl font-semibold">Whoops!</h2>
      <p className="text-lg">Something went wrong!</p>
      <p className="text-lg">
        Message:<span className="font-semibold">&rarr; {error.message}</span>
      </p>

      <Button variant="ghost" className="mt-8" onClick={() => reset()}>
        Reload
      </Button>
    </div>
  );
}
