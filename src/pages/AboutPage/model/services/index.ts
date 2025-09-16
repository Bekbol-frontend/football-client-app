import API from "@/shared/api";
import type { IAbout } from "../types";

export const getAbout = async (lang: string) => {
  return await API.get<IAbout>("/api/v1/client/about", {
    headers: {
      "x-lang": lang,
    },
  });
};
