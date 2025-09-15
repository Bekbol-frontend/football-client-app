import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { IMatchShedule } from "../../model/types";
import { CardActions, Chip, Stack, Typography } from "@mui/material";
import { baseURL } from "@/shared/api";
import styles from "./MatchSheduleCard.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  data: IMatchShedule;
}

function MatchSheduleCard({ data }: IProps) {
  const { isDesktop } = useResponsive();
  const { club, clubLeague, opponentClub, opponentLeague } = data;

  const date = new Date(data.matchDate);

  const dateCalendar = date.toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const hour = date.toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className={styles.card}>
      <CardContent>
        <Stack direction="row" gap={1}>
          <Stack flex={2}>
            <Stack gap={0.5}>
              <Stack className={styles.imgWrapper}>
                <img src={`${baseURL}${club.logo}`} alt={club.name} />
              </Stack>
              <Typography
                variant={isDesktop ? "h6" : "body1"}
                className={styles.name}
              >
                {club.name}
              </Typography>
              <Typography
                variant={isDesktop ? "h6" : "body1"}
                className={styles.title}
              >
                {clubLeague.title}
              </Typography>
            </Stack>
          </Stack>
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Chip label="VS" variant="filled" color="primary" />
          </Stack>
          <Stack flex={2}>
            <Stack gap={0.5}>
              <Stack className={styles.imgWrapper}>
                <img src={`${baseURL}${opponentClub.logo}`} alt={club.name} />
              </Stack>
              <Typography
                variant={isDesktop ? "h6" : "body1"}
                className={styles.name}
              >
                {opponentClub.name}
              </Typography>
              <Typography
                variant={isDesktop ? "h6" : "body1"}
                className={styles.title}
              >
                {opponentLeague.title}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions className={styles.cardBottom}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={0.4}
          flex={1}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <AccessTimeIcon />
            <Typography variant={isDesktop ? "subtitle1" : "body1"}>
              {hour}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <CalendarMonthIcon />
            <Typography variant={isDesktop ? "subtitle1" : "body1"}>
              {dateCalendar}
            </Typography>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default memo(MatchSheduleCard);
