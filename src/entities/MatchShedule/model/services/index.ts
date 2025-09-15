import API from "@/shared/api";
import type { IMatchShedule } from "../types";

export const getMatchShedule = async (
  lang: string,
  limit: number,
  page: string | number,
  category: string
) => {
  return await API.get<{
    data: IMatchShedule[];
    meta: { totalItems: number; totalPages: number };
  }>("/api/v1/client/match", {
    headers: {
      "x-lang": lang,
    },
    params: {
      limit,
      page,
      "filter.category": category,
    },
  });
};
