import { memo } from "react";
import { Section } from "../../Section";
import { Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./ErrorPage.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function ErrorPage() {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <Section className={styles.errorSection}>
      <Stack>
        <Typography
          variant={isDesktop ? "h2" : "h4"}
          gutterBottom
          color="error"
          sx={{
            textAlign: "center",
          }}
        >
          {t("Something went wrong.")}
        </Typography>
        <Button
          sx={{ alignSelf: "center" }}
          variant="contained"
          onClick={onReload}
        >
          {t("Reload")}
        </Button>
      </Stack>
    </Section>
  );
}

export default memo(ErrorPage);
