import type { TierDefinition } from "../data/tierList";

type TierRailProps = {
  tier: TierDefinition;
};

const railLabelLines: Record<TierDefinition["id"], string[]> = {
  T1: ["GOD", "TIER"],
  T2: ["DYNASTY", "ELITE"],
  T3: ["DYNASTY", "STUDS"],
  T4: ["UPSIDE", "PLAYERS"],
  T5: ["FLOOR /", "CEILING"],
};

export function TierRail({ tier }: TierRailProps) {
  return (
    <aside className="tier-rail" aria-label={`${tier.id} ${tier.railLabel}`}>
      <span className="tier-rail__code" aria-hidden="true">
        {tier.id}
      </span>
      <span className="tier-rail__label">
        {railLabelLines[tier.id].map((line) => (
          <span key={line}>{line}</span>
        ))}
      </span>
    </aside>
  );
}
