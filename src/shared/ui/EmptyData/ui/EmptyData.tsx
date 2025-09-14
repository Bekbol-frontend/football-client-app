import { memo } from "react";
import { Box, Typography } from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import { useTranslation } from "react-i18next";

function EmptyData() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        color: "GrayText",
      }}
    >
      <InboxOutlinedIcon sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h6">{t("Information not found")}</Typography>
      <Typography variant="body2">{t("There's nothing here yet.")}</Typography>
    </Box>
  );
}

export default memo(EmptyData);
