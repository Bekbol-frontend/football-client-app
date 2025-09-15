import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Typography } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
  gutterBottom?: boolean;
}

function TitleSection({ title, gutterBottom = true }: IProps) {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  return (
    <Typography variant={isDesktop ? "h4" : "h6"} gutterBottom={gutterBottom}>
      {t(title)}
    </Typography>
  );
}

export default memo(TitleSection);
