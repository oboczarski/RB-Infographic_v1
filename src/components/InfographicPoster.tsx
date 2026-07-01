import { useState } from "react";
import { brandLogoAsset } from "../data/assetMap";
import { tierDefinitions, type TierId } from "../data/tierList";
import { DynastyHubMark } from "./DynastyHubMark";
import { TierBand } from "./TierBand";

export function InfographicPoster() {
  const [activeTier, setActiveTier] = useState<TierId>("T1");

  return (
    <article className="infographic-poster" aria-labelledby="poster-title">
      <div className="poster-noise" aria-hidden="true" />
      <header className="poster-header">
        <div className="poster-header__copy">
          <h1 id="poster-title" className="poster-title">
            <span className="poster-title__rb">RB</span>
            <span className="poster-title__main">TIER LIST</span>
          </h1>
          <div className="poster-subtitle" aria-label="Dynasty Hub RB tiers 1 through 5">
            <span />
            <strong>DYNASTY HUB • RB TIERS 1-5</strong>
            <span />
          </div>
        </div>
        <div className="poster-brand-lockup">
          <img
            className="poster-brand-logo"
            src={brandLogoAsset.src}
            alt="Dynasty Hub logo"
          />
          <span className="poster-brand-name">dynasty hub</span>
        </div>
      </header>

      <div className="tier-stack">
        {tierDefinitions.map((tier) => (
          <TierBand
            key={tier.id}
            tier={tier}
            active={activeTier === tier.id}
            onActivate={setActiveTier}
          />
        ))}
      </div>

      <footer className="poster-footer" aria-label="Dynasty Hub">
        <div className="poster-footer__line" />
        <DynastyHubMark />
        <div className="poster-footer__line" />
      </footer>
    </article>
  );
}
