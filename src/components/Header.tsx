import styled, { css } from "styled-components";
import { mainColors, sizeDefinitions } from "./Theme";

export const HeaderCommonStyles = css`
  font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: ${sizeDefinitions.headerPrimarySize};
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;
export const BodyCommonStyles = css`
  font-weight: 500;
  font-family: "Khula", sans-serif;
  list-style-type:none;
  font-size: 0.95em;
  color: ${mainColors.textSecondaryColor};
  @media screen and (min-width:30em) {
    list-style-type:circle;
  }
`;

export const Description = styled.p`
  ${BodyCommonStyles}
`;

export const Accent = styled.span`
  font-weight: 600;
  font-style: italic;
  color: ${mainColors.textPrimaryColor};
`;

export const ContactName = styled.span`
  ${HeaderCommonStyles}
  font-size:1em;
  color: white;
  @media screen and (min-width: 30em) {
    font-size: 3em;
  }
`;

export const ContactDetails = styled.ul`
  list-style-type: none;
  padding:0;
  width:100%;
  text-align:center;
  @media screen and (min-width: 30em) {
    text-align: right;
  }
`;

export const ContactDetailsAnchorTag = styled.a`
  ${BodyCommonStyles}
  text-decoration: none;
  color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${mainColors.accentColor};
  @media screen and (min-width: 30em) {
    width:auto;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Header;
