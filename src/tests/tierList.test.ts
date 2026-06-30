import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { brandLogoAsset, playerImageAssets, teamLogoAssets } from "../data/assetMap";
import { players, tierDefinitions } from "../data/tierList";

describe("RB tier list data", () => {
  it("contains the complete 18-player rank order", () => {
    expect(players).toHaveLength(18);
    expect(players.map((player) => player.rank)).toEqual(
      Array.from({ length: 18 }, (_, index) => index + 1),
    );
  });

  it("uses the expected tier distribution", () => {
    const counts = players.reduce<Record<string, number>>((accumulator, player) => {
      accumulator[player.tier] = (accumulator[player.tier] ?? 0) + 1;
      return accumulator;
    }, {});

    expect(counts).toEqual({
      T1: 2,
      T2: 4,
      T3: 3,
      T4: 3,
      T5: 6,
    });
  });

  it("keeps all rows as running backs with known tiers", () => {
    const tierIds = new Set(tierDefinitions.map((tier) => tier.id));

    expect(players.every((player) => player.pos === "RB")).toBe(true);
    expect(players.every((player) => tierIds.has(player.tier))).toBe(true);
  });

  it("maps every player and team to the expected imported asset", () => {
    for (const player of players) {
      expect(player.image).toBe(playerImageAssets[player.name].src);
      expect(player.imagePath).toBe(playerImageAssets[player.name].sourcePath);
      expect(player.logo).toBe(teamLogoAssets[player.team].src);
      expect(player.logoPath).toBe(teamLogoAssets[player.team].sourcePath);
    }
  });

  it("references local asset files that exist on disk", () => {
    for (const player of players) {
      expect(
        existsSync(path.resolve(process.cwd(), player.imagePath)),
        `${player.name} image should exist`,
      ).toBe(true);
      expect(
        existsSync(path.resolve(process.cwd(), player.logoPath)),
        `${player.team} logo should exist`,
      ).toBe(true);
    }

    expect(existsSync(path.resolve(process.cwd(), brandLogoAsset.sourcePath))).toBe(
      true,
    );
  });
});
