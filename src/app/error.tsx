"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
        <h1 className="text-4xl font-headline font-bold mb-4 text-primary dark:text-accent">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected issue. Please try again, or contact support if the problem persists.
        </p>
        {error?.message && (
          <p className="text-sm bg-muted p-3 rounded-md mb-6 font-code">
            Error details: {error.message}
          </p>
        )}
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
