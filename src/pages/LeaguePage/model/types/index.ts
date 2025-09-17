export interface ILeaguePoint {
  draws: number;
  goals_conceded: number;
  goals_scored: number;
  id: number;
  logo: string;
  losses: number;
  matches_played: number;
  name: string;
  total_points: number;
  wins: number;
}

export enum LeagueStatus {
  Yesterday = "Yesterday",
  Today = "Today",
  Tomorrow = "Tomorrow",
}
