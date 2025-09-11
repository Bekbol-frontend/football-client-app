import { memo } from "react";
import { Container, Stack } from "@mui/material";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import MenuList from "./MenuList/MenuList";
import { SwitchLang } from "@/shared/ui/SwitchLang";

function Header() {
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
          <MenuList />
          <SwitchLang />
        </Stack>
      </Container>
    </header>
  );
}

export default memo(Header);
