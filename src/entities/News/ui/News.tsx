import { memo } from "react";
import type { INews } from "@/pages/HomePage";
import { ErrorData } from "@/shared/ui/ErrorData";
import { Section } from "@/shared/ui/Section";
import { TitleSection } from "@/shared/ui/TitleSection";
import {
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./News.module.scss";
import { EmptyData } from "@/shared/ui/EmptyData";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { baseURL } from "@/shared/api";
import { useTranslation } from "react-i18next";

interface IProps {
  data?: INews[];
  isLoading: boolean;
  isError: boolean;
}

function News(props: IProps) {
  const { data, isError, isLoading } = props;
  const { isDesktop } = useResponsive();
  const { t } = useTranslation();

  if (isError) return <ErrorData />;

  return (
    <Section className={styles.sectionNews}>
      <Container className={styles.container}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          {isLoading ? (
            <Skeleton
              variant="rounded"
              width={isDesktop ? 300 : 152}
              height={isDesktop ? 36 : 30}
            />
          ) : (
            <TitleSection title={t("News")} />
          )}
          {isLoading ? (
            <Skeleton variant="rounded" width={86} height={36} />
          ) : (
            <Button variant="contained">{t("See all")}</Button>
          )}
        </Stack>
        <div className={styles.newsBlock}>
          {data ? (
            <>
              <Grid container spacing={2}>
                {data[0] && (
                  <Grid size={12}>
                    {isLoading ? (
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={isDesktop ? 450 : 250}
                      />
                    ) : (
                      <div
                        className={styles.newsMain}
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, .1)), url(${baseURL}${data[0].images[0]})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className={styles.info}>
                          <Typography
                            variant={isDesktop ? "h3" : "h6"}
                            gutterBottom
                            className={styles.mainNewsTitle}
                          >
                            {data[0].title}
                          </Typography>
                          <Typography
                            variant={isDesktop ? "body1" : "body2"}
                            className={styles.mainNewsDesc}
                          >
                            {data[0].description}
                          </Typography>
                        </div>
                      </div>
                    )}
                  </Grid>
                )}

                {data[1] && (
                  <Grid size={isDesktop ? 8 : 12}>
                    <div className={styles.leftNews}>
                      <div className={styles.leftNewsImgWrapper}>
                        {isLoading ? (
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 350 : 200}
                            sx={{ mb: 1 }}
                          />
                        ) : (
                          <img
                            src={`${baseURL}${data[1].images[0]}`}
                            alt={data[1].title}
                          />
                        )}
                      </div>
                      {isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={isDesktop ? 25 : 15}
                          sx={{ mb: 0.5 }}
                        />
                      ) : (
                        <Typography
                          variant={isDesktop ? "h6" : "subtitle1"}
                          sx={{ mb: 0.5 }}
                          className={styles.title}
                        >
                          {data[1].title}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Stack gap={0.5}>
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 20 : 15}
                          />
                          <Skeleton
                            variant="rectangular"
                            width="75%"
                            height={isDesktop ? 20 : 15}
                          />
                        </Stack>
                      ) : (
                        <Typography
                          variant={isDesktop ? "body1" : "body2"}
                          className={styles.subTitle}
                        >
                          {data[1].description}
                        </Typography>
                      )}
                    </div>
                  </Grid>
                )}

                <Grid size={isDesktop ? 4 : 12}>
                  {data[2] && (
                    <div className={styles.right}>
                      <div className={styles.rightNewsImgWrapper}>
                        {isLoading ? (
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 150 : 200}
                            sx={{ mb: 1 }}
                          />
                        ) : (
                          <img
                            src={`${baseURL}${data[2].images[0]}`}
                            alt={data[0].title}
                          />
                        )}
                      </div>
                      {isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={isDesktop ? 25 : 15}
                          sx={{ mb: 0.5 }}
                        />
                      ) : (
                        <Typography
                          variant={isDesktop ? "h6" : "subtitle1"}
                          sx={{ mb: 0.5 }}
                          className={styles.title}
                        >
                          {data[2].title}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Stack gap={0.5}>
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 20 : 15}
                          />
                          <Skeleton
                            variant="rectangular"
                            width="75%"
                            height={isDesktop ? 20 : 15}
                          />
                        </Stack>
                      ) : (
                        <Typography
                          variant={isDesktop ? "body1" : "body2"}
                          className={styles.subTitle}
                        >
                          {data[2].description}
                        </Typography>
                      )}
                    </div>
                  )}
                  {data[3] && (
                    <div className={styles.right}>
                      <div className={styles.rightNewsImgWrapper}>
                        {isLoading ? (
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 150 : 200}
                            sx={{ mb: 1 }}
                          />
                        ) : (
                          <img
                            src={`${baseURL}${data[3].images[0]}`}
                            alt={data[0].title}
                          />
                        )}
                      </div>
                      {isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={isDesktop ? 25 : 15}
                          sx={{ mb: 0.5 }}
                        />
                      ) : (
                        <Typography
                          variant={isDesktop ? "h6" : "subtitle1"}
                          sx={{ mb: 0.5 }}
                          className={styles.title}
                        >
                          {data[3].title}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Stack gap={0.5}>
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={isDesktop ? 20 : 15}
                          />
                          <Skeleton
                            variant="rectangular"
                            width="75%"
                            height={isDesktop ? 20 : 15}
                          />
                        </Stack>
                      ) : (
                        <Typography
                          variant={isDesktop ? "body1" : "body2"}
                          className={styles.subTitle}
                        >
                          {data[3].description}
                        </Typography>
                      )}
                    </div>
                  )}
                </Grid>
              </Grid>
            </>
          ) : (
            <EmptyData />
          )}
        </div>
      </Container>
    </Section>
  );
}

export default memo(News);
