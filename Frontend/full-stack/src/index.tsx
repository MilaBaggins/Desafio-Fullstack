import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StyledGlobals } from "./styles/globals";
import { StyledColors } from "./styles/colors";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledGlobals />
    <StyledColors />
    <StyledTypography />
    <App />
  </React.StrictMode>
);
