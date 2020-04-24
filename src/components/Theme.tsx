import React from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: JSX.Element;
}

const accentColor = "#BC3463";
export const mainColors = {
  accentColor: accentColor,
  textPrimaryColor: "rgb(90, 87, 87)",
  textSecondaryColor: "#737373",
  headerPrimaryColor: accentColor
};

export const sizeDefinitions = {
  headerPrimarySize: "1em",
  primarySpacing: "1em",
  smallSpacing: "0.5em"
};

const Theme = (children: Props): JSX.Element => {
  return <ThemeProvider theme={{ mode: "light" }}>{children}</ThemeProvider>;
};

export default Theme;
