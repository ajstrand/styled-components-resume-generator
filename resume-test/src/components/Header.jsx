/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import styled from "styled-components";
import myTheme from "../baseTheme";
import { BodyCommonStyles, HeaderCommonStyles } from "./ResumeBodyStyles";
const {mainColors} = myTheme
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
  padding: 0;
  width: 100%;
  text-align: center;
  @media screen and (min-width: 30em) {
    text-align: right;
  }
`;

export const ContactDetailsAnchorTag = styled.a`
  ${BodyCommonStyles}
  text-decoration: none;
  color: white;
`;

const HeaderBase = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${mainColors.accentColor};
  @media screen and (min-width: 30em) {
    width: auto;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Header = (props) => {
  const {
    name,
    site,
    emailLabel,
    emailLinkValue,
    phone,
  } = props.config;
  const list = [
    { label: site, href: site },
    { label: emailLabel, href: emailLinkValue },
    { label: phone },
  ];
  let content;
  const objectNotEmpty = Object.keys(props).length > 0;
  if (objectNotEmpty) {
    const DetailsList = list.map((dataToRender) => {
      return (
        <li key={dataToRender.label.toString()}>
          <ContactDetailsAnchorTag href={dataToRender.href} target="_blank">
            {dataToRender.label}
          </ContactDetailsAnchorTag>
        </li>
      );
    });
    content = (
      <HeaderBase>
        <ContactName>{name}</ContactName>
        <ContactDetails>{DetailsList}</ContactDetails>
      </HeaderBase>
    );
  } else {
    content = null;
  }
  return content;
};

export default Header;
