import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface IProps {
  children: ReactNode;
}

function AppThemeProvider({ children }: IProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-nunito)",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>{children}</>
    </ThemeProvider>
  );
}

export default AppThemeProvider;
