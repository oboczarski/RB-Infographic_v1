import type { CSSProperties } from "react";
import type { Player } from "../data/tierList";

export type PosterVersion = "original" | "revised";

type PlayerNameListProps = {
  players: Player[];
  posterVersion: PosterVersion;
};

type TrendIconPlayer = "achane" | "judkins" | "skattebo";

export function formatPlayerDisplayName(name: string): string {
  const trimmedName = name.trim();
  const parts = trimmedName.split(/\s+/);

  if (parts.length < 2) {
    return trimmedName;
  }

  const firstInitial = parts[0].charAt(0).toUpperCase();
  const lastToken = parts[parts.length - 1];
  const normalizedLastToken = lastToken.replace(/[.,]/g, "");
  const suffixPattern = /^(jr|sr|i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i;

  if (parts.length >= 3 && suffixPattern.test(normalizedLastToken)) {
    const lastName = parts[parts.length - 2];
    return `${firstInitial}. ${lastName} ${lastToken}`;
  }

  const lastName = lastToken;
  return `${firstInitial}. ${lastName}`;
}

const trendIconPlayerByName: Partial<Record<Player["name"], TrendIconPlayer>> = {
  "De'Von Achane": "achane",
  "Quinshon Judkins": "judkins",
  "Cam Skattebo": "skattebo",
};

const revisedMaterialTrendPath =
  "M480-80q-100 0-183.5-44T158-242l164-164 92 77q12 10 27.5 9t26.5-12l172-172v64q0 17 11.5 28.5T680-400q17 0 28.5-11.5T720-440v-160q0-17-11.5-28.5T680-640H520q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560h64L438-414l-92-77q-12-10-27.5-9T292-488L116-312q-17-38-26.5-80.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z";

const originalMaterialTrendPath =
  "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 23 3 45t9 43l122-122q11-11 26.5-11.5T348-516l104 87 131-131h-23q-17 0-28.5-11.5T520-600q0-17 11.5-28.5T560-640h120q17 0 28.5 11.5T720-600v120q0 17-11.5 28.5T680-440q-17 0-28.5-11.5T640-480v-23L482-346q-11 11-26.5 12T428-344l-103-88-118 118q42 69 113.5 111.5T480-160Zm300 20q17 0 28.5-11.5T820-180q0-17-11.5-28.5T780-220q-17 0-28.5 11.5T740-180q0 17 11.5 28.5T780-140ZM455-480Z";

function MaterialTrendIcon({
  player,
  posterVersion,
}: {
  player: TrendIconPlayer;
  posterVersion: PosterVersion;
}) {
  const iconPath =
    posterVersion === "original"
      ? originalMaterialTrendPath
      : revisedMaterialTrendPath;

  return (
    <svg
      className={`${posterVersion}-player-trend-icon ${posterVersion}-player-trend-icon--${player}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      aria-hidden="true"
      focusable="false"
    >
      <path d={iconPath} />
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
              {formatPlayerDisplayName(player.name)}
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
