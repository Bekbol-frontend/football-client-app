import { memo } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import type { IPersonnel } from "../../model/types";
import { baseURL } from "@/shared/api";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./PersonnelCard.module.scss";

interface IProps {
  data: IPersonnel;
}

function PersonnelCard({ data }: IProps) {
  const { avatar, fullName, position, information } = data;
  const { isDesktop } = useResponsive();

  return (
    <Card sx={{ maxWidth: "100%" }} className={styles.card}>
      <CardMedia
        sx={{ height: isDesktop ? 200 : 120 }}
        image={`${baseURL}${avatar}`}
        title="green iguana"
      />
      <CardContent
        sx={{ bgcolor: "var(--color-blue)", color: "var(--color-wite)" }}
      >
        <Typography
          variant={isDesktop ? "h6" : "subtitle1"}
          component="div"
          className={styles.fullName}
        >
          {fullName}
        </Typography>
        <Typography
          gutterBottom
          variant={isDesktop ? "subtitle1" : "subtitle2"}
        >
          {position}
        </Typography>
        <Typography variant="body2">{information}</Typography>
      </CardContent>
      <CardActions
        sx={{
          bgcolor: "var(--color-blue)",
          color: "var(--color-wite)",
          padding: "0px var(--space-sm) var(--space-sm)",
        }}
      >
        <Stack direction="row" gap={1}>
          {data.phone && (
            <a href={`tel:${data.phone}`} className={styles.link}>
              <LocalPhoneIcon
                fontSize="small"
                sx={{ color: "var(--color-wite)" }}
              />
            </a>
          )}
          {data.email && (
            <a href={`mailto:${data.email}`} className={styles.link}>
              <EmailIcon fontSize="small" sx={{ color: "var(--color-wite)" }} />
            </a>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default memo(PersonnelCard);
