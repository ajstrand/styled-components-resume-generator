import styled, {css} from "styled-components"
import { mainColors } from './Theme';

export const HeaderCommonStyles = css `
  font-weight: 600;
  font-family: 'Yantramanav', sans-serif;
  font-size: headerPrimarySize;
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;
export const BodyCommonStyles = css `
   font-weight: 500;
  font-family: 'Khula', sans-serif;
  font-size: 0.95em;
  color: ${mainColors.textSecondaryColor};
`;

export const Description = styled.p `
  ${BodyCommonStyles}
`;

export const Accent = styled.span`
  font-weight: 600;
  font-style: italic;
  color: ${mainColors.textPrimaryColor};

`;

const Header = styled.div `
  padding: 0 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: $accentColor;

  .contactName {
    ${HeaderCommonStyles}
    font-size: 3em;
    color: white;
  }

  .contactDetails {
    list-style-type: none;
    text-align: right;

    a {
      ${BodyCommonStyles}
      text-decoration: none;
      color: white;
    }
  }
`;

export default Header;
