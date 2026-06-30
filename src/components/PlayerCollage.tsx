import type { CSSProperties } from "react";
import { placementForRank, type Player } from "../data/tierList";

type PlayerCollageProps = {
  players: Player[];
};

type PlacementStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--w": string;
  "--z": number;
  "--r": string;
  "--flip": number;
};

export function PlayerCollage({ players }: PlayerCollageProps) {
  return (
    <div className="player-collage" aria-hidden="true">
      <div className="player-collage__halo" />
      {players.map((player) => {
        const placement = placementForRank(player.rank);
        const style: PlacementStyle = {
          "--x": `${placement.x}%`,
          "--y": `${placement.y}%`,
          "--w": `${placement.width}%`,
          "--z": placement.zIndex,
          "--r": `${placement.rotate ?? 0}deg`,
          "--flip": placement.flip ? -1 : 1,
        };

        return (
          <img
            className="player-cutout"
            key={player.rank}
            src={player.image}
            alt=""
            loading="eager"
            style={style}
          />
        );
      })}
    </div>
  );
}
