import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

// Toast notifications
const toastOptions = {
  style: {
    background: "#333",
    color: "#fff",
  },
  success: {
    iconTheme: {
      primary: "green",
      secondary: "white",
    },
    style: {
      background: "white",
      color: "black",
    },
  },
  error: {
    style: {
      background: "#ffb098",
      color: "white",
    },
  },
};

// Creating a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    },
    mutations: {
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster toastOptions={toastOptions} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
