import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Container } from "@mui/material";
import styles from "./Banner.module.scss";
import BannerSwiper from "./BannerSwiper/BannerSwiper";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import { EmptyData } from "@/shared/ui/EmptyData";
import { ErrorData } from "@/shared/ui/ErrorData";
import type { INews } from "@/pages/HomePage";

interface IProps {
  isLoading: boolean;
  isError: boolean;
  data?: INews[];
}

function Banner(props: IProps) {
  const { data, isError, isLoading } = props;
  const { isDesktop } = useResponsive();

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
    return <ErrorData />;
  }

  if (!data || !data.length) return <EmptyData />;

  return (
    <Section
      className={styles.sectionBanner}
      style={{
        paddingBlock: isDesktop ? "30px" : "15px",
      }}
    >
      <Container className={styles.container}>
        <BannerSwiper data={data} />
      </Container>
    </Section>
  );
}

export default memo(Banner);
