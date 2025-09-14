import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AppThemeProvider } from "./app/Providers/AppThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// main-css
import "./app/styles/main.scss";

// i18n
import "./shared/config/i18n";
import { ErrorBoundary } from "./app/Providers/ErrorBoundary";

// swiper-css
import "swiper/swiper.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
