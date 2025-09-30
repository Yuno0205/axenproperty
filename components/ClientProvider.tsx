"use client";

import { ReactBricksContext } from "react-bricks/frontend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import config from "../react-bricks.config";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactBricksContext.Provider value={config as any}>
        {children}
      </ReactBricksContext.Provider>
    </QueryClientProvider>
  );
}
