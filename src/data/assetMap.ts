import achaneImage from "../../Assets/RB-Infographic_v1-imgs/Achane-2_Teal-noBG.png";
import bijanImage from "../../Assets/RB-Infographic_v1-imgs/Bijan-1_Black-noBG.png";
import breeceImage from "../../Assets/RB-Infographic_v1-imgs/Breece_Hall-1_White-noBG.png";
import buckyImage from "../../Assets/RB-Infographic_v1-imgs/Irving-1_Red-NoBG.png";
import camImage from "../../Assets/RB-Infographic_v1-imgs/Cam_Skattebo-2_Blue Background Removed.png";
import chaseImage from "../../Assets/RB-Infographic_v1-imgs/Chase_Brown-1_Black-NoBG.png";
import gibbsImage from "../../Assets/RB-Infographic_v1-imgs/Gibbs2_White-noBG.png";
import hamptonImage from "../../Assets/RB-Infographic_v1-imgs/Hampton-1_Blue-noBG.png";
import hendersonImage from "../../Assets/RB-Infographic_v1-imgs/TreVeyon_Henderson-1_Navy-NoBG.png";
import jeantyImage from "../../Assets/RB-Infographic_v1-imgs/Jeanty-1_Black-noBG.png";
import judkinsImage from "../../Assets/RB-Infographic_v1-imgs/Quinshon_Judkins-1_Brown-NoBG.png";
import kyrenImage from "../../Assets/RB-Infographic_v1-imgs/Kyren_Williams-1_Blue-noBG.png";
import loveImage from "../../Assets/RB-Infographic_v1-imgs/JLove-1_PracticeRed-noBG.png";
import mccaffreyImage from "../../Assets/RB-Infographic_v1-imgs/McCaffrey-1_White-NoBG.png";
import saquonImage from "../../Assets/RB-Infographic_v1-imgs/Saquon_Barkley-1_Green-NoBG.png";
import taylorImage from "../../Assets/RB-Infographic_v1-imgs/Taylor-1_Blue-NoBG.png";
import walkerImage from "../../Assets/RB-Infographic_v1-imgs/WalkerIII-1_Blue-noBG.png";
import cookImage from "../../Assets/RB-Infographic_v1-imgs/James_Cook-1_Blue-noBG.png";

import ariLogo from "../../Assets/NFL_logos_svg/ari.svg";
import atlLogo from "../../Assets/NFL_logos_svg/atl.svg";
import bufLogo from "../../Assets/NFL_logos_svg/buf.svg";
import cinLogo from "../../Assets/NFL_logos_svg/cin.svg";
import cleLogo from "../../Assets/NFL_logos_svg/cle.svg";
import detLogo from "../../Assets/NFL_logos_svg/det.svg";
import indLogo from "../../Assets/NFL_logos_svg/ind.svg";
import kcLogo from "../../Assets/NFL_logos_svg/kc.svg";
import lacLogo from "../../Assets/NFL_logos_svg/lac.svg";
import larLogo from "../../Assets/NFL_logos_svg/lar.svg";
import lvLogo from "../../Assets/NFL_logos_svg/lv.svg";
import miaLogo from "../../Assets/NFL_logos_svg/mia.svg";
import neLogo from "../../Assets/NFL_logos_svg/ne.svg";
import nygLogo from "../../Assets/NFL_logos_svg/nyg.svg";
import nyjLogo from "../../Assets/NFL_logos_svg/nyj.svg";
import phiLogo from "../../Assets/NFL_logos_svg/phi.svg";
import sfLogo from "../../Assets/NFL_logos_svg/sf.svg";
import tbLogo from "../../Assets/NFL_logos_svg/tb.svg";

export type AssetReference = {
  src: string;
  sourcePath: string;
};

export const playerImageAssets = {
  "Bijan Robinson": {
    src: bijanImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Bijan-1_Black-noBG.png",
  },
  "Jahmyr Gibbs": {
    src: gibbsImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Gibbs2_White-noBG.png",
  },
  "De'Von Achane": {
    src: achaneImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Achane-2_Teal-noBG.png",
  },
  "Ashton Jeanty": {
    src: jeantyImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Jeanty-1_Black-noBG.png",
  },
  "Jeremiyah Love": {
    src: loveImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/JLove-1_PracticeRed-noBG.png",
  },
  "Omarion Hampton": {
    src: hamptonImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Hampton-1_Blue-noBG.png",
  },
  "Quinshon Judkins": {
    src: judkinsImage,
    sourcePath:
      "Assets/RB-Infographic_v1-imgs/Quinshon_Judkins-1_Brown-NoBG.png",
  },
  "Jonathan Taylor": {
    src: taylorImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Taylor-1_Blue-NoBG.png",
  },
  "James Cook": {
    src: cookImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/James_Cook-1_Blue-noBG.png",
  },
  "TreVeyon Henderson": {
    src: hendersonImage,
    sourcePath:
      "Assets/RB-Infographic_v1-imgs/TreVeyon_Henderson-1_Navy-NoBG.png",
  },
  "Kenneth Walker III": {
    src: walkerImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/WalkerIII-1_Blue-noBG.png",
  },
  "Breece Hall": {
    src: breeceImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Breece_Hall-1_White-noBG.png",
  },
  "Chase Brown": {
    src: chaseImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Chase_Brown-1_Black-NoBG.png",
  },
  "Kyren Williams": {
    src: kyrenImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Kyren_Williams-1_Blue-noBG.png",
  },
  "Cam Skattebo": {
    src: camImage,
    sourcePath:
      "Assets/RB-Infographic_v1-imgs/Cam_Skattebo-2_Blue Background Removed.png",
  },
  "Christian McCaffrey": {
    src: mccaffreyImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/McCaffrey-1_White-NoBG.png",
  },
  "Saquon Barkley": {
    src: saquonImage,
    sourcePath:
      "Assets/RB-Infographic_v1-imgs/Saquon_Barkley-1_Green-NoBG.png",
  },
  "Bucky Irving": {
    src: buckyImage,
    sourcePath: "Assets/RB-Infographic_v1-imgs/Irving-1_Red-NoBG.png",
  },
} as const satisfies Record<string, AssetReference>;

export const teamLogoAssets = {
  ARI: { src: ariLogo, sourcePath: "Assets/NFL_logos_svg/ari.svg" },
  ATL: { src: atlLogo, sourcePath: "Assets/NFL_logos_svg/atl.svg" },
  BUF: { src: bufLogo, sourcePath: "Assets/NFL_logos_svg/buf.svg" },
  CIN: { src: cinLogo, sourcePath: "Assets/NFL_logos_svg/cin.svg" },
  CLE: { src: cleLogo, sourcePath: "Assets/NFL_logos_svg/cle.svg" },
  DET: { src: detLogo, sourcePath: "Assets/NFL_logos_svg/det.svg" },
  IND: { src: indLogo, sourcePath: "Assets/NFL_logos_svg/ind.svg" },
  KC: { src: kcLogo, sourcePath: "Assets/NFL_logos_svg/kc.svg" },
  LAC: { src: lacLogo, sourcePath: "Assets/NFL_logos_svg/lac.svg" },
  LAR: { src: larLogo, sourcePath: "Assets/NFL_logos_svg/lar.svg" },
  LV: { src: lvLogo, sourcePath: "Assets/NFL_logos_svg/lv.svg" },
  MIA: { src: miaLogo, sourcePath: "Assets/NFL_logos_svg/mia.svg" },
  NE: { src: neLogo, sourcePath: "Assets/NFL_logos_svg/ne.svg" },
  NYG: { src: nygLogo, sourcePath: "Assets/NFL_logos_svg/nyg.svg" },
  NYJ: { src: nyjLogo, sourcePath: "Assets/NFL_logos_svg/nyj.svg" },
  PHI: { src: phiLogo, sourcePath: "Assets/NFL_logos_svg/phi.svg" },
  SF: { src: sfLogo, sourcePath: "Assets/NFL_logos_svg/sf.svg" },
  TB: { src: tbLogo, sourcePath: "Assets/NFL_logos_svg/tb.svg" },
} as const satisfies Record<string, AssetReference>;

export type PlayerName = keyof typeof playerImageAssets;
export type TeamAbbreviation = keyof typeof teamLogoAssets;
