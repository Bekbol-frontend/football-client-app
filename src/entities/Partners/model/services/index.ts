import API from "@/shared/api";
import type { IPartner } from "../types";

export const getParteners = async (lang: string) => {
  return await API.get<IPartner[]>("/api/v1/client/partner/list", {
    headers: {
      "x-lang": lang,
    },
  });
};
