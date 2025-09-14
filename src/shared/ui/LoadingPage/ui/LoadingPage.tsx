import { memo } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./LoadingPage.module.scss";

function LoadingPage() {
  return (
    <div className={styles.loadingPage}>
      <CircularProgress />
    </div>
  );
}

export default memo(LoadingPage);
