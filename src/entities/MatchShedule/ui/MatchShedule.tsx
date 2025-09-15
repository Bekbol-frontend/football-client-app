import { memo, useCallback } from "react";
import { Section } from "@/shared/ui/Section";
import { TitleSection } from "@/shared/ui/TitleSection";
import { Container, Grid, Pagination, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMatchShedule } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import MatchSheduleCard from "./MatchSheduleCard/MatchSheduleCard";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";
import MatchSheduleSkeleton from "./MatchSheduleSkeleton/MatchSheduleSkeleton";
import { useSearchParams } from "react-router-dom";
import MatchSheduleStatus from "./MatchSheduleStatus/MatchSheduleStatus";

function MatchShedule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDesktop } = useResponsive();
  const { i18n } = useTranslation();

  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "Live";

  const handleChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      setSearchParams({ page: String(value) });
    },
    []
  );

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      getMatchShedule(i18n.language, isDesktop ? 3 : 1, page, category),
    queryKey: [queryKey.matchShedule, i18n.language, isDesktop, page, category],
  });

  if (isLoading) {
    return (
      <Section>
        <Container>
          <MatchSheduleSkeleton isDesktop={isDesktop} />
        </Container>
      </Section>
    );
  }

  if (isError) return <ErrorData />;
  if (!data?.data || !data.data.data.length) return <EmptyData />;

  return (
    <Section>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          direction="row"
        >
          <TitleSection title="Match schedule" gutterBottom={false} />
          <MatchSheduleStatus setSearchParams={setSearchParams} />
        </Stack>

        <Grid container spacing={2} sx={{ mt: isDesktop ? 4 : 2 }}>
          {data.data.data.map((el) => (
            <Grid size={isDesktop ? 4 : 12} key={el.id}>
              <MatchSheduleCard data={el} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination
            variant="outlined"
            color="primary"
            page={page}
            count={data.data.meta.totalPages}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </Section>
  );
}

export default memo(MatchShedule);
