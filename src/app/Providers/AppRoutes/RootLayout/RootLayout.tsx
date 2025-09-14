import { memo, Suspense } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import { LoadingPage } from "@/shared/ui/LoadingPage";

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default memo(RootLayout);
