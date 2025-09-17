import API from "@/shared/api";
import type { ILeaguePoint } from "../types";

export const getLeaguesPoint = async (
  lagn: string,
  season?: string,
  leagueId?: string,
  subLeagueId?: string
) => {
  const params: Record<string, string> = {};

  if (season) params.season = season;
  if (leagueId) params.leagueId = leagueId;
  if (subLeagueId) params.subLeagueId = subLeagueId;

  return await API.get<ILeaguePoint[]>("/api/v1/client/club/point", {
    headers: {
      "x-lang": lagn,
    },
    params,
  });
};

export const getLeaguePointSelect = async () => {
  return await API.get<{ id: number; title: string }[]>(
    "/api/v1/client/league/list"
  );
};

export const getLeaguePointSelectSubLeague = async (id: string) => {
  const params: Record<string, string> = {};

  if (id) params.parentLeagueId = id;

  return await API.get<{ id: number; title: string }[]>(
    "/api/v1/client/league/list",
    {
      params,
    }
  );
};
