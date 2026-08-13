"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { QUERY_CACHE_TIME } from "../constants/query.const";

export default function ReactQueryContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: QUERY_CACHE_TIME.MIN_1,
            gcTime: QUERY_CACHE_TIME.MIN_1,
            retry: 2,
            retryDelay: 1000,
          },
        },
      }),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </>
  );
}
