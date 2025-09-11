import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { routePaths } from "@/shared/config/routeConfig";
import { HomePageAsync } from "@/pages/HomePage";
import { AboutPageAsync } from "@/pages/AboutPage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={routePaths.homePage} element={<HomePageAsync />} />
        <Route path={routePaths.aboutPage} element={<AboutPageAsync />} />
      </Route>
    </Routes>
  );
}

export default memo(AppRouter);
