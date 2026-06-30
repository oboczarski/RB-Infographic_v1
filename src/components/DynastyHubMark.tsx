type DynastyHubMarkProps = {
  compact?: boolean;
};

export function DynastyHubMark({ compact = false }: DynastyHubMarkProps) {
  return (
    <div className={compact ? "dh-mark dh-mark--compact" : "dh-mark"}>
      <div className="dh-mark__hex" aria-hidden="true">
        <span>d</span>
        <span>h</span>
      </div>
      {!compact && <span className="dh-mark__word">DYNASTY HUB</span>}
    </div>
  );
}
