import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { queryKey } from "@/shared/lib/queryKey";
import { Section } from "@/shared/ui/Section";
import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { getLeaguesPoint } from "../model/services";
import { LoadingPage } from "@/shared/ui/LoadingPage";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import LeaguePointTable from "./LeaguePointTable/LeaguePointTable";

function LeaguePage() {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getLeaguesPoint(),
    queryKey: [queryKey.leaguesPoint],
  });

  if (isLoading) return <LoadingPage />;
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
        {data?.data && data.data.length ? (
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
