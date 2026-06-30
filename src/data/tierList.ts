import {
  playerImageAssets,
  teamLogoAssets,
  type PlayerName,
  type TeamAbbreviation,
} from "./assetMap";

export type TierId = "T1" | "T2" | "T3" | "T4" | "T5";

export type Player = {
  rank: number;
  tier: TierId;
  name: PlayerName;
  pos: "RB";
  team: TeamAbbreviation;
  image: string;
  imagePath: string;
  logo: string;
  logoPath: string;
};

export type TierDefinition = {
  id: TierId;
  railLabel: string;
  tone: "cyan" | "lime" | "blue" | "violet" | "magenta";
  accent: string;
  accentRgb: string;
};

export type PlayerPlacement = {
  rank: number;
  x: number;
  y: number;
  width: number;
  zIndex: number;
  rotate?: number;
  flip?: boolean;
};

const playerRows: Array<
  Pick<Player, "rank" | "tier" | "name" | "pos" | "team">
> = [
  { rank: 1, tier: "T1", name: "Bijan Robinson", pos: "RB", team: "ATL" },
  { rank: 2, tier: "T1", name: "Jahmyr Gibbs", pos: "RB", team: "DET" },
  { rank: 3, tier: "T2", name: "De'Von Achane", pos: "RB", team: "MIA" },
  { rank: 4, tier: "T2", name: "Ashton Jeanty", pos: "RB", team: "LV" },
  { rank: 5, tier: "T2", name: "Jeremiyah Love", pos: "RB", team: "ARI" },
  { rank: 6, tier: "T2", name: "Omarion Hampton", pos: "RB", team: "LAC" },
  { rank: 7, tier: "T3", name: "Quinshon Judkins", pos: "RB", team: "CLE" },
  { rank: 8, tier: "T3", name: "Jonathan Taylor", pos: "RB", team: "IND" },
  { rank: 9, tier: "T3", name: "James Cook", pos: "RB", team: "BUF" },
  { rank: 10, tier: "T4", name: "TreVeyon Henderson", pos: "RB", team: "NE" },
  { rank: 11, tier: "T4", name: "Kenneth Walker III", pos: "RB", team: "KC" },
  { rank: 12, tier: "T4", name: "Breece Hall", pos: "RB", team: "NYJ" },
  { rank: 13, tier: "T5", name: "Chase Brown", pos: "RB", team: "CIN" },
  { rank: 14, tier: "T5", name: "Kyren Williams", pos: "RB", team: "LAR" },
  { rank: 15, tier: "T5", name: "Cam Skattebo", pos: "RB", team: "NYG" },
  {
    rank: 16,
    tier: "T5",
    name: "Christian McCaffrey",
    pos: "RB",
    team: "SF",
  },
  { rank: 17, tier: "T5", name: "Saquon Barkley", pos: "RB", team: "PHI" },
  { rank: 18, tier: "T5", name: "Bucky Irving", pos: "RB", team: "TB" },
];

export const tierDefinitions: TierDefinition[] = [
  {
    id: "T1",
    railLabel: "GOD TIER",
    tone: "cyan",
    accent: "#10f4f0",
    accentRgb: "16, 244, 240",
  },
  {
    id: "T2",
    railLabel: "DYNASTY ELITE",
    tone: "lime",
    accent: "#a8ff11",
    accentRgb: "168, 255, 17",
  },
  {
    id: "T3",
    railLabel: "DYNASTY STUDS",
    tone: "blue",
    accent: "#11b7ff",
    accentRgb: "17, 183, 255",
  },
  {
    id: "T4",
    railLabel: "UPSIDE PLAYERS",
    tone: "violet",
    accent: "#a675ff",
    accentRgb: "166, 117, 255",
  },
  {
    id: "T5",
    railLabel: "FLOOR / CEILING",
    tone: "magenta",
    accent: "#ff1f8f",
    accentRgb: "255, 31, 143",
  },
];

export const players: Player[] = playerRows.map((player) => {
  const image = playerImageAssets[player.name];
  const logo = teamLogoAssets[player.team];

  return {
    ...player,
    image: image.src,
    imagePath: image.sourcePath,
    logo: logo.src,
    logoPath: logo.sourcePath,
  };
});

export const playerPlacements: PlayerPlacement[] = [
  { rank: 1, x: -7, y: 0, width: 81, zIndex: 4 },
  { rank: 2, x: -12, y: -2, width: 147, zIndex: 3 },
  { rank: 3, x: -22, y: 8, width: 84, zIndex: 6 },
  { rank: 4, x: 3, y: -7, width: 82, zIndex: 5 },
  { rank: 5, x: 10, y: 7, width: 105, zIndex: 4 },
  { rank: 6, x: 27, y: 5, width: 119, zIndex: 3 },
  { rank: 7, x: 6, y: 14, width: 80, zIndex: 5 },
  { rank: 8, x: 46, y: 13, width: 63, zIndex: 3 },
  { rank: 9, x: -15, y: 14, width: 71, zIndex: 4 },
  { rank: 10, x: -5, y: 7, width: 70, zIndex: 5 },
  { rank: 11, x: 14, y: 4, width: 76, zIndex: 4 },
  { rank: 12, x: 58, y: -3, width: 42, zIndex: 3 },
  { rank: 13, x: -5, y: 1, width: 47, zIndex: 7 },
  { rank: 14, x: 23, y: -4, width: 32, zIndex: 6 },
  { rank: 15, x: 42, y: 2, width: 65, zIndex: 5 },
  { rank: 16, x: -8, y: 43, width: 64, zIndex: 8 },
  { rank: 17, x: 18, y: 38, width: 56, zIndex: 9 },
  { rank: 18, x: 29, y: 34, width: 90, zIndex: 10 },
];

export function playersForTier(tier: TierId): Player[] {
  return players.filter((player) => player.tier === tier);
}

export function placementForRank(rank: number): PlayerPlacement {
  const placement = playerPlacements.find((candidate) => candidate.rank === rank);

  if (!placement) {
    throw new Error(`Missing placement metadata for player rank ${rank}`);
  }

  return placement;
}
