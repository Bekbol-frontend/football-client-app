import { memo } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default memo(RootLayout);
