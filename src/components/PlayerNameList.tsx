import type { CSSProperties } from "react";
import type { Player } from "../data/tierList";

export type PosterVersion = "original" | "revised";

type PlayerNameListProps = {
  players: Player[];
  posterVersion: PosterVersion;
};

type TrendIconPlayer = "achane" | "judkins" | "skattebo";

const trendIconPlayerByName: Partial<Record<Player["name"], TrendIconPlayer>> = {
  "De'Von Achane": "achane",
  "Quinshon Judkins": "judkins",
  "Cam Skattebo": "skattebo",
};

const materialTrendPath =
  "M480-80q-100 0-183.5-44T158-242l164-164 92 77q12 10 27.5 9t26.5-12l172-172v64q0 17 11.5 28.5T680-400q17 0 28.5-11.5T720-440v-160q0-17-11.5-28.5T680-640H520q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560h64L438-414l-92-77q-12-10-27.5-9T292-488L116-312q-17-38-26.5-80.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z";

function MaterialTrendIcon({
  player,
  posterVersion,
}: {
  player: TrendIconPlayer;
  posterVersion: PosterVersion;
}) {
  return (
    <svg
      className={`${posterVersion}-player-trend-icon ${posterVersion}-player-trend-icon--${player}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      aria-hidden="true"
      focusable="false"
    >
      <path d={materialTrendPath} />
    </svg>
  );
}

export function PlayerNameList({ players, posterVersion }: PlayerNameListProps) {
  const listStyle = {
    "--player-count": players.length,
  } as CSSProperties & { "--player-count": number };

  return (
    <ol
      className="player-list"
      style={listStyle}
      aria-label="Players in tier"
    >
      {players.map((player) => {
        const trendIconPlayer = trendIconPlayerByName[player.name];

        return (
          <li className="player-list__row" key={player.rank}>
            <span className="player-list__rank">{player.rank}</span>
            <span className="player-list__logo-wrap">
              <img
                className="player-list__logo"
                src={player.logo}
                alt={`${player.team} logo`}
                loading="eager"
              />
            </span>
            <span
              className={
                trendIconPlayer
                  ? `player-list__name player-list__name--${posterVersion}-trend-${trendIconPlayer}`
                  : "player-list__name"
              }
            >
              {player.name}
              {trendIconPlayer ? (
                <MaterialTrendIcon
                  player={trendIconPlayer}
                  posterVersion={posterVersion}
                />
              ) : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
