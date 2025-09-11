import { useMediaQuery, useTheme } from "@mui/material";

export const useResponsive = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // > 900px

  return { isMobile, isDesktop };
};
