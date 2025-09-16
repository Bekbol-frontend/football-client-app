import { Section } from "@/shared/ui/Section";
import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getPersonnel } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { useTranslation } from "react-i18next";
import { LoadingPage } from "@/shared/ui/LoadingPage";
import { ErrorData } from "@/shared/ui/ErrorData";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { EmptyData } from "@/shared/ui/EmptyData";
import PersonnelCard from "./PersonnelCard/PersonnelCard";
import { useSearchParams } from "react-router-dom";

function PersonnelPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n, t } = useTranslation();
  const { isDesktop } = useResponsive();
  const page = searchParams.get("page") || 1;

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getPersonnel(i18n.language, isDesktop ? 8 : 4, page),
    queryKey: [queryKey.personnel, i18n.language, isDesktop, page],
  });

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

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
          {t("Personnel")}
        </Typography>
        {data?.data.data.length ? (
          <div>
            <Grid container spacing={isDesktop ? 2 : 0.7}>
              {data.data.data.map((el) => (
                <Grid size={isDesktop ? 3 : 6} key={el.id}>
                  <PersonnelCard data={el} />
                </Grid>
              ))}
            </Grid>

            <Stack alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
              <Pagination
                page={Number(page)}
                count={data.data.meta.totalPages}
                shape="rounded"
                color="primary"
                onChange={handleChange}
              />
            </Stack>
          </div>
        ) : (
          <EmptyData />
        )}
      </Container>
    </Section>
  );
}

export default memo(PersonnelPage);
