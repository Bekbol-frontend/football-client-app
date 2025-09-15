import { memo } from "react";
import type { INews } from "@/pages/HomePage";
import { ErrorData } from "@/shared/ui/ErrorData";
import { Section } from "@/shared/ui/Section";
import { TitleSection } from "@/shared/ui/TitleSection";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./News.module.scss";
import { EmptyData } from "@/shared/ui/EmptyData";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  data?: INews[];
  isLoading: boolean;
  isError: boolean;
}

function News(props: IProps) {
  const { data, isError, isLoading } = props;
  const { isDesktop } = useResponsive();

  if (isLoading) return <h1>Loading</h1>;
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
          <TitleSection title="News" />
          <Button variant="contained">See all</Button>
        </Stack>
        <div className={styles.newsBlock}>
          {data ? (
            <>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <div
                    className={styles.newsMain}
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, .1)), url(${data[0].images[0]})`,
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
                </Grid>
                <Grid size={isDesktop ? 8 : 12}>
                  <div className={styles.leftNews}>
                    <div className={styles.leftNewsImgWrapper}>
                      <img src={data[1].images[0]} alt={data[1].title} />
                    </div>
                    <Typography
                      variant={isDesktop ? "h6" : "subtitle1"}
                      sx={{ mb: 0.5 }}
                      className={styles.title}
                    >
                      {data[1].title}
                    </Typography>
                    <Typography
                      variant={isDesktop ? "body1" : "body2"}
                      className={styles.subTitle}
                    >
                      {data[1].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid size={isDesktop ? 4 : 12}>
                  <div className={styles.right}>
                    <div className={styles.rightNewsImgWrapper}>
                      <img src={data[0].images[0]} alt={data[0].title} />
                    </div>
                    <Typography
                      variant={isDesktop ? "h6" : "subtitle1"}
                      sx={{ mb: 0.5 }}
                      className={styles.title}
                    >
                      {data[0].title}
                    </Typography>
                    <Typography
                      variant={isDesktop ? "body1" : "body2"}
                      className={styles.subTitle}
                    >
                      {data[1].description}
                    </Typography>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.rightNewsImgWrapper}>
                      <img src={data[0].images[0]} alt={data[0].title} />
                    </div>
                    <Typography
                      variant={isDesktop ? "h6" : "subtitle1"}
                      sx={{ mb: 0.5 }}
                      className={styles.title}
                    >
                      {data[0].title}
                    </Typography>
                    <Typography
                      variant={isDesktop ? "body1" : "body2"}
                      className={styles.subTitle}
                    >
                      {data[1].description}
                    </Typography>
                  </div>
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
