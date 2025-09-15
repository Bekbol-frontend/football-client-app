import API from "@/shared/api";
import { MatchStatus, type IMatchShedule } from "../types";

export const getMatchShedule = async (
  lang: string,
  limit: number,
  page: string | number,
  category: string
) => {
  const params: Record<string, string | number> = {
    limit,
    page,
  };

  if (category === MatchStatus.Live) {
    params["filter.category"] = category;
  }

  if (category !== MatchStatus.Live) {
    params["filter.date"] = category;
  }

  return await API.get<{
    data: IMatchShedule[];
    meta: { totalItems: number; totalPages: number };
  }>("/api/v1/client/match", {
    headers: {
      "x-lang": lang,
    },
    params,
  });
};
