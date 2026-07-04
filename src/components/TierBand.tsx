import type { CSSProperties, KeyboardEvent } from "react";
import {
  playersForTier,
  type TierDefinition,
  type TierId,
} from "../data/tierList";
import { PlayerCollage } from "./PlayerCollage";
import { PlayerNameList, type PosterVersion } from "./PlayerNameList";
import { TierRail } from "./TierRail";

type TierBandProps = {
  tier: TierDefinition;
  active: boolean;
  onActivate: (tier: TierId) => void;
  posterVersion: PosterVersion;
};

export function TierBand({
  tier,
  active,
  onActivate,
  posterVersion,
}: TierBandProps) {
  const tierPlayers = playersForTier(tier.id);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate(tier.id);
    }
  }

  return (
    <section
      className={`tier-band tier-band--${tier.tone}${active ? " is-active" : ""}`}
      style={
        {
          "--accent": tier.accent,
          "--accent-rgb": tier.accentRgb,
        } as CSSProperties
      }
      tabIndex={0}
      role="button"
      aria-pressed={active}
      aria-label={`${tier.id} ${tier.railLabel} tier`}
      onClick={() => onActivate(tier.id)}
      onFocus={() => onActivate(tier.id)}
      onMouseEnter={() => onActivate(tier.id)}
      onKeyDown={handleKeyDown}
    >
      <TierRail tier={tier} />
      <PlayerNameList players={tierPlayers} posterVersion={posterVersion} />
      <PlayerCollage players={tierPlayers} />
    </section>
  );
}
