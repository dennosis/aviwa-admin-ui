import { type ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { environment } from "@/infra/env/environment";
import "react-toastify/dist/ReactToastify.css";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutos
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <GoogleOAuthProvider clientId={environment.googleClientId}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer position="bottom-right" theme="colored" />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
