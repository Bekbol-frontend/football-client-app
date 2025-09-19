import { Section } from "@/shared/ui/Section";
import { Container, Skeleton, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getParteners } from "../model/services";
import { queryKey } from "@/shared/lib/queryKey";
import { useTranslation } from "react-i18next";
import { TitleSection } from "@/shared/ui/TitleSection";
import PartnersSwiper from "./PartnersSwiper/PartnersSwiper";
import { ErrorData } from "@/shared/ui/ErrorData";
import { EmptyData } from "@/shared/ui/EmptyData";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import styles from "./Partners.module.scss";

function Partners() {
  const { i18n } = useTranslation();
  const { isDesktop } = useResponsive();
  const {t} = useTranslation()

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getParteners(i18n.language),
    queryKey: [queryKey.partners, i18n.language],
  });

  if (isLoading) return "loading";
  if (isError) return <ErrorData />;

  return (
    <Section className={styles.sectionPartners}>
      <Container>
        {isLoading ? (
          <Skeleton
            variant="rounded"
            width={isDesktop ? "45%" : "35%"}
            height={isDesktop ? 36 : 30}
          />
        ) : (
          <TitleSection title={t("Partners")} />
        )}
        {!data?.data || !data.data.length ? (
          <EmptyData />
        ) : isLoading ? (
          <Stack direction="row" gap={1} sx={{ mt: 2 }}>
            {Array(isDesktop ? 12 : 4)
              .fill("")
              .map((_, i) => (
                <Skeleton key={i} variant="rounded" width="100%" height={70} />
              ))}
          </Stack>
        ) : (
          <PartnersSwiper data={data.data} />
        )}
      </Container>
    </Section>
  );
}

export default memo(Partners);
