import { Section } from "@/shared/ui/Section";
import { TitleSection } from "@/shared/ui/TitleSection";
import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getMatchShedule } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import MatchSheduleCard from "./MatchSheduleCard/MatchSheduleCard";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";

function MatchShedule() {
  const { isDesktop } = useResponsive();
  const { i18n } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getMatchShedule(i18n.language, isDesktop ? 3 : 1),
    queryKey: [queryKey.matchShedule, i18n.language, isDesktop],
  });

  if (isLoading) return <>Loading</>;
  if (isError) return <ErrorData />;
  if (!data?.data || !data.data.data.length) return <EmptyData />;

  return (
    <Section>
      <Container>
        <TitleSection title="Match schedule" />

        <Grid container spacing={2} sx={{ mt: isDesktop ? 4 : 2 }}>
          {data.data.data.map((el) => (
            <Grid size={isDesktop ? 4 : 12} key={el.id}>
              <MatchSheduleCard data={el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default memo(MatchShedule);
