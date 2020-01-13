import styled, { css } from "styled-components";
import { mainColors } from "./Theme";

export const HeaderCommonStyles = css`
  font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: headerPrimarySize;
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;
export const BodyCommonStyles = css`
  font-weight: 500;
  font-family: "Khula", sans-serif;
  font-size: 0.95em;
  color: ${mainColors.textSecondaryColor};
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
  font-size: 3em;
  color: white;
`;

export const ContactDetails = styled.ul`
  list-style-type: none;
  text-align: right;
`;

export const ContactDetailsAnchorTag = styled(ContactDetails)`
  ${BodyCommonStyles}
  text-decoration: none;
  color: white;
`;

const Header = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${mainColors.accentColor};
`;

export default Header;
