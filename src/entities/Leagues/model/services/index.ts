import API from "@/shared/api";
import type { ILeague } from "../types";

export const getLueagues = async () => {
  return await API.get<ILeague[]>("/api/v1/client/league/list");
};
