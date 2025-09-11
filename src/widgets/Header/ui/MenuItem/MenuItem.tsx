import { memo } from "react";
import { NavLink } from "react-router-dom";
import type { IMenu } from "../../model/types";
import styles from "./MenuItem.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslation } from "react-i18next";

interface IProps {
  menu: IMenu;
}

function MenuItem(props: IProps) {
  const { menu } = props;
  const { name, path } = menu;

  const { t } = useTranslation();

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx([styles.menuItem], { [styles.active]: isActive })
      }
    >
      {t(name)}
    </NavLink>
  );
}

export default memo(MenuItem);
