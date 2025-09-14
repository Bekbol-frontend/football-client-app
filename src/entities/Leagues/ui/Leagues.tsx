import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Container } from "@mui/material";
import styles from "./Leagues.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getLueagues } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import LeaguesSwiper from "./LeaguesSwiper/LeaguesSwiper";
import LeaguesSkeleton from "./LeaguesSkeleton/LeaguesSkeleton";
import { EmptyData } from "@/shared/ui/EmptyData";
import { ErrorData } from "@/shared/ui/ErrorData";

function Leagues() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getLueagues,
    queryKey: [queryKey.leagues],
  });

  if (isLoading) {
    return (
      <Section className={styles.sectionLeagues}>
        <Container>
          <LeaguesSkeleton />
        </Container>
      </Section>
    );
  }

  if (isError) return <ErrorData />;

  if (!data?.data || !data.data.length)
    return (
      <Section>
        <Container>
          <EmptyData />
        </Container>
      </Section>
    );

  return (
    <Section className={styles.sectionLeagues}>
      <Container>
        <LeaguesSwiper data={data?.data} />
      </Container>
    </Section>
  );
}

export default memo(Leagues);
