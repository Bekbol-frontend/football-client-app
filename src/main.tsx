import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AppThemeProvider } from "./app/Providers/AppThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// main-css
import "./app/styles/main.scss";

// i18n
import "./shared/config/i18n";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
