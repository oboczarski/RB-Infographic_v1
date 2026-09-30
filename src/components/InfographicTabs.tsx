import { useId, useState, type KeyboardEvent } from "react";
import { InfographicPoster } from "./InfographicPoster";
import { RevisedInfographicPoster } from "./RevisedInfographicPoster";

type PosterView = "original" | "revised";

const posterViews: Array<{ id: PosterView; label: string }> = [
  { id: "original", label: "Original" },
  { id: "revised", label: "Revised" },
];

export function InfographicTabs() {
  const baseId = useId();
  const [activeView, setActiveView] = useState<PosterView>("original");

  function focusView(view: PosterView) {
    window.requestAnimationFrame(() => {
      document.getElementById(`${baseId}-${view}-tab`)?.focus();
    });
  }

  function activateView(view: PosterView) {
    setActiveView(view);
    focusView(view);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = posterViews.findIndex((view) => view.id === activeView);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % posterViews.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + posterViews.length) % posterViews.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = posterViews.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateView(posterViews[nextIndex].id);
  }

  return (
    <section className="infographic-workbench" aria-label="RB tier list versions">
      <div
        className="infographic-tabs"
        role="tablist"
        aria-label="Infographic version"
      >
        {posterViews.map((view) => {
          const selected = activeView === view.id;

          return (
            <button
              className="infographic-tabs__tab"
              id={`${baseId}-${view.id}-tab`}
              key={view.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-${view.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => activateView(view.id)}
              onKeyDown={handleTabKeyDown}
            >
              {view.label}
            </button>
          );
        })}
      </div>

      <div
        className="infographic-tabs__panel"
        id={`${baseId}-${activeView}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-${activeView}-tab`}
      >
        {activeView === "original" ? (
          <InfographicPoster />
        ) : (
          <RevisedInfographicPoster />
        )}
      </div>
    </section>
  );
}
