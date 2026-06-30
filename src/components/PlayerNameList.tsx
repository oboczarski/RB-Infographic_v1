import type { CSSProperties } from "react";
import type { Player } from "../data/tierList";

type PlayerNameListProps = {
  players: Player[];
};

export function PlayerNameList({ players }: PlayerNameListProps) {
  const listStyle = {
    "--player-count": players.length,
  } as CSSProperties & { "--player-count": number };

  return (
    <ol
      className="player-list"
      style={listStyle}
      aria-label="Players in tier"
    >
      {players.map((player) => (
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
          <span className="player-list__name">{player.name}</span>
        </li>
      ))}
    </ol>
  );
}
