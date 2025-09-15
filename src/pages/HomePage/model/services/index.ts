import API from "@/shared/api";
import type { INews } from "../types";

export const getNews = async (lang: string) => {
  return await API.get<{ data: INews[] }>("/api/v1/client/news", {
    headers: {
      "x-lang": lang,
    },
    params: {
      limit: 5,
    },
  });
};
