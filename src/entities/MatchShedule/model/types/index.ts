interface IClub {
  id: number;
  logo: string;
  name: string;
}

interface IClubLeague {
  id: number;
  title: string;
}

export interface IMatchShedule {
  id: number;

  club: IClub;
  clubLeague: IClubLeague;
  clubScore: number;

  matchDate: string;

  opponentClub: IClub;
  opponentLeague: IClubLeague;
  opponentClubScore: number;

  status: string;
}

export enum MatchStatus {
  Live = "Live",
  Yesterday = "Yesterday",
  Today = "Today",
  Tomorrow = "Tomorrow",
}

export interface IMatchStatus {
  value: MatchStatus;
  name: string;
}
