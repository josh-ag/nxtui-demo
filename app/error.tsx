"use client";

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

      <button
        className="text-base bg-blue-500 px-4 py-1 rounded-md mt-6"
        onClick={() => reset()}
      >
        Reload
      </button>
    </div>
  );
}
