'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">Something went wrong!</h2>
            <p className="text-gray-600">Failed to load sticker configuration</p>
            <Button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}