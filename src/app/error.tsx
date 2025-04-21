"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="space-x-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 