import API from "@/shared/api";
import type { IPersonnel } from "../types";

export const getPersonnel = async (
  lang: string,
  limit: number,
  page: string | number
) => {
  const params: Record<string, string | number> = {
    limit,
  };

  if (page) {
    params.page = page;
  }

  return await API.get<{
    data: IPersonnel[];
    meta: { totalItems: number; totalPages: number };
  }>("/api/v1/client/personal", {
    headers: {
      "x-lang": lang,
    },
    params,
  });
};
