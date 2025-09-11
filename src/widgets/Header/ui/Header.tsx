import { memo } from "react";
import { Container, IconButton, Stack } from "@mui/material";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import MenuList from "./MenuList/MenuList";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const { isDesktop } = useResponsive();

  return (
    <header className={styles.header}>
      <Container sx={{ flex: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Link to={routePaths.homePage} className={styles.logoLink}>
            <img src="/logo.svg" alt="logo" />
          </Link>
          {isDesktop && <MenuList />}
          <Stack direction="row" gap={1} alignItems="center">
            <SwitchLang />
            {!isDesktop && (
              <IconButton color="primary">
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

export default memo(Header);
