import { memo } from "react";
import { Banner } from "@/entities/Banner";
import { Leagues } from "@/entities/Leagues";
import { MatchShedule } from "@/entities/MatchShedule";
import { News } from "@/entities/News";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "../model/services";
import { useTranslation } from "react-i18next";
import { queryKey } from "@/shared/lib/queryKey";
import { Partners } from "@/entities/Partners";

function HomePage() {
  const { i18n } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getNews(i18n.language),
    queryKey: [queryKey.news, i18n.language],
  });

  return (
    <>
      <Banner data={data?.data.data} isError={isError} isLoading={isLoading} />
      <Leagues />
      <MatchShedule />
      <News data={data?.data.data} isError={isError} isLoading={isLoading} />
      <Partners />
    </>
  );
}

export default memo(HomePage);
