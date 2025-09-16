import { Section } from "@/shared/ui/Section";
import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getAbout } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import { LoadingPage } from "@/shared/ui/LoadingPage";

function AboutPage() {
  const { t, i18n } = useTranslation();
  const { isDesktop } = useResponsive();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAbout(i18n.language),
    queryKey: [queryKey.about, i18n.language],
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
          {t("About us")}
        </Typography>
        {data?.data ? (
          <div>
            <Typography variant={isDesktop ? "h5" : "h6"} gutterBottom>
              {data?.data.title}
            </Typography>
            <Typography variant={isDesktop ? "body1" : "body2"}>
              {data?.data.description}
            </Typography>
          </div>
        ) : (
          <EmptyData />
        )}
      </Container>
    </Section>
  );
}

export default memo(AboutPage);
