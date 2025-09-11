import { memo, useMemo } from "react";
import { menuItems } from "../../model/menu";
import MenuItem from "../MenuItem/MenuItem";
import { Stack } from "@mui/material";

function MenuList() {
  const MenuLink = useMemo(
    () => menuItems.map((menu) => <MenuItem menu={menu} key={menu.path} />),
    []
  );

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      {MenuLink}
    </Stack>
  );
}

export default memo(MenuList);
