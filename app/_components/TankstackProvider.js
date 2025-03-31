"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

function TankstackProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <main style={{ flexGrow: 1, overflowY: "auto" }}>{children}</main>
    </QueryClientProvider>
  );
}

export default TankstackProvider;
