import "@fontsource/inter/400.css";
import "@fontsource/google-sans/latin-400.css";
import "@fontsource/google-sans/latin-500.css";
import "@fontsource/google-sans/latin-700.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/bebas-neue";
import "@fontsource/black-ops-one";
import "@fontsource/bruno-ace-sc";
import "@fontsource/permanent-marker";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/infographic.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
