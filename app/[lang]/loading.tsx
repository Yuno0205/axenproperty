import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center bg-white py-20">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-10 w-10 animate-spin text-gray-400" />

        <p className="text-sm font-medium text-gray-500 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
