import { memo, useState } from "react";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import MenuList from "./MenuList/MenuList";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "../model/menu";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { isDesktop } = useResponsive();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((el) => (
          <ListItem key={el.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={el.path}
              sx={{
                "&.active": {
                  backgroundColor: "var(--color-blue)",
                  color: "var(--color-wite)",
                  fontWeight: "bold",
                },
                "&.active > .icon": {
                  color: "var(--color-wite)",
                },
              }}
            >
              <ListItemIcon className="icon">{el.icon}</ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              <>
                <IconButton color="primary" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

export default memo(Header);
