import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { queryKey } from "@/shared/lib/queryKey";
import { Section } from "@/shared/ui/Section";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getLeaguePointSelect,
  getLeaguePointSelectSubLeague,
  getLeaguesPoint,
} from "../model/services";
import { LoadingPage } from "@/shared/ui/LoadingPage";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import LeaguePointTable from "./LeaguePointTable/LeaguePointTable";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function LeaguePage() {
  const [leagueEnabled, setLeagueEnabled] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const leagueId = searchParams.get("leagueId") || "";
  const subLeagueId = searchParams.get("subLeagueId") || "";
  const season = searchParams.get("season") || "";

  const { t, i18n } = useTranslation();
  const { isDesktop } = useResponsive();

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      getLeaguesPoint(i18n.language, season, leagueId, subLeagueId),
    queryKey: [
      queryKey.leaguesPoint,
      i18n.language,
      season,
      leagueId,
      subLeagueId,
    ],
  });

  const { data: dataSelectLeague, isLoading: isLoadingSelect } = useQuery({
    queryFn: getLeaguePointSelect,
    queryKey: [queryKey.leaguesPointSelect],
    enabled: leagueEnabled,
  });

  const { data: dataSelectSubLeague, isLoading: isLoadingSelectSub } = useQuery(
    {
      queryFn: () => getLeaguePointSelectSubLeague(leagueId!),
      queryKey: [queryKey.leaguesPointSelectSubLeague, leagueId],
      enabled: !!leagueId,
    }
  );

  const handleChangeLeague = useCallback(
    (event: SelectChangeEvent) => {
      setSearchParams({
        leagueId: event.target.value,
        subLeagueId: "",
        season,
      });
    },
    [season]
  );

  const handleChangeSubLeague = useCallback(
    (event: SelectChangeEvent) => {
      if (leagueId) {
        setSearchParams({
          leagueId,
          subLeagueId: event.target.value as string,
          season: season || "",
        });
      }
    },
    [season, leagueId]
  );

  const handleSeason = useCallback(
    (value: PickerValue) => {
      const year = dayjs(value).year();

      setSearchParams({
        season: year.toString(),
        leagueId: leagueId || "",
        subLeagueId: subLeagueId || "",
      });
    },
    [leagueId, subLeagueId]
  );

  if (isError) return <ErrorData />;

  return (
    <Section>
      <Container>
        <Typography
          variant={isDesktop ? "h3" : "h4"}
          textAlign={"center"}
          gutterBottom
        >
          {t("League")}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          mb={2}
          gap={isDesktop ? 2 : 1}
          flexWrap="wrap"
        >
          <Stack direction="row" gap={isDesktop ? 2 : 1}>
            <Box sx={{ width: isDesktop ? 170 : 110 }}>
              <FormControl
                fullWidth
                sx={{ bgcolor: "var(--color-wite)" }}
                size={isDesktop ? "medium" : "small"}
              >
                <InputLabel id="demo-simple-select-label-1">
                  {t("League")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-1"
                  id="demo-simple-select-1"
                  value={leagueId}
                  label={t("League")}
                  onChange={handleChangeLeague}
                  onOpen={() => {
                    if (!leagueEnabled) {
                      setLeagueEnabled(true);
                    }
                  }}
                  MenuProps={MenuProps}
                >
                  {isLoadingSelect ? (
                    <MenuItem disabled>Loading...</MenuItem>
                  ) : (
                    dataSelectLeague?.data.map((el) => (
                      <MenuItem value={el.id} key={el.id}>
                        {el.title}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: isDesktop ? 170 : 120 }}>
              <FormControl
                fullWidth
                sx={{ bgcolor: "var(--color-wite)" }}
                size={isDesktop ? "medium" : "small"}
              >
                <InputLabel id="demo-simple-select-label-2">
                  {t("Subleague")}
                </InputLabel>
                <Select
                  disabled={!leagueId}
                  labelId="demo-simple-select-label-2"
                  id="demo-simple-select-2"
                  value={subLeagueId}
                  label={t("Subleague")}
                  onChange={handleChangeSubLeague}
                  MenuProps={MenuProps}
                >
                  {isLoadingSelectSub ? (
                    <MenuItem disabled>Loading...</MenuItem>
                  ) : (
                    dataSelectSubLeague?.data.map((el) => (
                      <MenuItem value={el.id} key={el.id}>
                        {el.title}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: isDesktop ? 170 : 110 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ bgcolor: "var(--color-wite)" }}
                  label={t("Year")}
                  views={["year"]}
                  value={season ? dayjs(season) : null}
                  onChange={handleSeason}
                  slotProps={{
                    textField: {
                      size: isDesktop ? "medium" : "small",
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Stack>
          {(leagueId || season) && (
            <Button
              sx={{ alignSelf: "flex-start" }}
              variant="contained"
              onClick={() => {
                setSearchParams({
                  leagueId: "",
                  subLeagueId: "",
                  season: "",
                });
              }}
            >
              {t("Show all")}
            </Button>
          )}
        </Stack>

        {isLoading ? (
          <div
            style={{
              height: isDesktop ? 400 : 250,
            }}
          >
            <LoadingPage />
          </div>
        ) : data?.data && data.data.length ? (
          <div>
            <LeaguePointTable data={data.data} />
          </div>
        ) : (
          <EmptyData />
        )}
      </Container>
    </Section>
  );
}

export default memo(LeaguePage);
