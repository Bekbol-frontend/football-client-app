import { memo } from "react";
import type { ILeaguePoint } from "../../model/types";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { baseURL } from "@/shared/api";
import styles from "./LeaguePointTable.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  data: ILeaguePoint[];
}

function LeaguePointTable({ data }: IProps) {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  return (
    <TableContainer component={Paper} sx={{ maxHeight: isDesktop ? 600 : 400 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("POS")}</TableCell>
            <TableCell>{t("Team")}</TableCell>
            <TableCell>{t("Game")}</TableCell>
            <TableCell>{t("Victory")}</TableCell>
            <TableCell>{t("Draw")}</TableCell>
            <TableCell>{t("Defeat")}</TableCell>
            <TableCell>{t("UG")}</TableCell>
            <TableCell>{t("O’G")}</TableCell>
            <TableCell>{t("Point")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                <Stack direction="row" gap={1.5} alignItems="center">
                  <img
                    src={`${baseURL}${row.logo}`}
                    alt={row.name}
                    className={styles.img}
                  />
                  <Typography variant="body1">{row.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell>{row.matches_played}</TableCell>
              <TableCell>{row.wins}</TableCell>
              <TableCell>{row.draws}</TableCell>
              <TableCell>{row.losses}</TableCell>
              <TableCell>{row.goals_conceded}</TableCell>
              <TableCell>{row.goals_scored}</TableCell>
              <TableCell>{row.total_points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(LeaguePointTable);
