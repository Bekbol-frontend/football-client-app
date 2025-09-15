import API from "@/shared/api";
import type { IMatchShedule } from "../types";

export const getMatchShedule = async (
  lang: string,
  limit: number,
  page: string | number
) => {
  return await API.get<{ data: IMatchShedule[]; meta: { totalItems: number } }>(
    "/api/v1/client/match",
    {
      headers: {
        "x-lang": lang,
      },
      params: {
        limit,
        page,
      },
    }
  );
};
