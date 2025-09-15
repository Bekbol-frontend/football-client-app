import { MatchStatus, type IMatchStatus } from "../types";

export const matchStatus: IMatchStatus[] = [
  { value: MatchStatus.Live, name: "Live" },
  { value: MatchStatus.Yesterday, name: "Yesterday" },
  { value: MatchStatus.Today, name: "Today" },
  { value: MatchStatus.Tomorrow, name: "Tomorrow" },
];
