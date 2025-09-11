import { routePaths } from "@/shared/config/routeConfig";
import type { IMenu } from "../types";

export const menuItems: IMenu[] = [
  { path: routePaths.homePage, name: "Home" },
  { path: routePaths.aboutPage, name: "About" },
  { path: routePaths.personnelPage, name: "Personnel" },
  { path: routePaths.leaguePage, name: "League" },
];
