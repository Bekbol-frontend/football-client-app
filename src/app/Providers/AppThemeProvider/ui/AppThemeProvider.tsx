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
      h1: {
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "bold",
      },
      h3: {
        fontWeight: "bold",
      },
      h4: {
        fontWeight: "bold",
      },
      h5: {
        fontWeight: "bold",
      },
      h6: {
        fontWeight: "bold",
      },
    },

    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: "100%",
            width: "1500px",
          },
        },
      },
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
