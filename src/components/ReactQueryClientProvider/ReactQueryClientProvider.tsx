"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const ReactQueryClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;