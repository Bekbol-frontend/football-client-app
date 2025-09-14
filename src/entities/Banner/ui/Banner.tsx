import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Container } from "@mui/material";
import styles from "./Banner.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { useTranslation } from "react-i18next";
import BannerSwiper from "./BannerSwiper/BannerSwiper";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import { ErrorPage } from "@/shared/ui/ErrorPage";

function Banner() {
  const { i18n } = useTranslation();

  const { isDesktop } = useResponsive();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getNews(i18n.language),
    queryKey: [queryKey.news, i18n.language],
  });

  if (isLoading) {
    return (
      <Section
        className={styles.sectionBanner}
        style={{
          paddingBlock: isDesktop ? "30px" : "15px",
        }}
      >
        <Container className={styles.container}>
          <BannerSkeleton />
        </Container>
      </Section>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!data?.data) return null;

  return (
    <Section
      className={styles.sectionBanner}
      style={{
        paddingBlock: isDesktop ? "30px" : "15px",
      }}
    >
      <Container className={styles.container}>
        <BannerSwiper data={data.data.data} />
      </Container>
    </Section>
  );
}

export default memo(Banner);
