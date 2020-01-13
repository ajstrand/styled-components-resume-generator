import { ThemeProvider } from "styled-components";
import React from "react";
import PropTypes from 'prop-types';
const accentColor = "#4aa0d5"
export const mainColors = {
  accentColor: accentColor,
  textPrimaryColor: "rgb(90, 87, 87)",
  textSecondaryColor: "#737373",
  headerPrimaryColor: accentColor
}

export const sizeDefinitions = {
  headerPrimarySize: "1em",
  primarySpacing: "1em",
  smallSpacing: "0.5em"
}

const Theme = ({ children }): JSX.Element => {
  return (<ThemeProvider theme={{ mode: 'light' }}>{children}</ThemeProvider>);
};

Theme.propTypes = {
  children: PropTypes.element
}

export default Theme
