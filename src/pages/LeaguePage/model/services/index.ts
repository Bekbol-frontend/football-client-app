import API from "@/shared/api";
import type { ILeaguePoint } from "../types";

export const getLeaguesPoint = async () => {
  return await API.get<ILeaguePoint[]>("/api/v1/client/club/point");
};
