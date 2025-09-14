import { memo } from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTranslation } from "react-i18next";

function ErrorData() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        color: "error.main",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h6">{t("An error occurred.")}</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {t("There was a problem loading the data. Please try again.")}
      </Typography>

      <Button
        variant="contained"
        color="error"
        onClick={() => window.location.reload()}
      >
        {t("Try again.")}
      </Button>
    </Box>
  );
}

export default memo(ErrorData);
