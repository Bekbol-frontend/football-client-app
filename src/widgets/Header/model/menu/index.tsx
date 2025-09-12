import { routePaths } from "@/shared/config/routeConfig";
import type { IMenu } from "../types";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GroupIcon from "@mui/icons-material/Group";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const menuItems: IMenu[] = [
  { path: routePaths.homePage, name: "Home", icon: <HomeIcon /> },
  { path: routePaths.aboutPage, name: "About", icon: <InfoIcon /> },
  { path: routePaths.personnelPage, name: "Personnel", icon: <GroupIcon /> },
  { path: routePaths.leaguePage, name: "League", icon: <SportsSoccerIcon /> },
];
