"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

// Component này sẽ thiết lập và cung cấp QueryClient cho toàn bộ ứng dụng
const QueryProviders = ({ children }: { children: React.ReactNode }) => {
  // Chúng ta sử dụng useState để đảm bảo QueryClient chỉ được tạo một lần
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProviders;
