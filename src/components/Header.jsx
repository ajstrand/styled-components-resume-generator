/** @jsx h */
/** @jsxFrag Fragment */
import { styled } from '@linaria/react'
import { BodyCommonStyles } from './ResumeBodyStyles.jsx'
import { useState, useEffect } from 'preact/hooks'
import myTheme from "./baseTheme";
const {sizeDefinitions, mainColors} = myTheme


export const Description = styled.p`
  ${BodyCommonStyles}
`

// export const Accent = styled.span`
//   font-weight: 600;
//   font-style: italic;
//   color: ${mainColors.textPrimaryColor};
// `;

export const ContactName = styled.span`
    text-transform: capitalize;
    font-family: 'Yantramanav', sans-serif;
    font-weight: 600;
    color: white;
  @media screen and (min-width: 30em) {
    padding-top: unset;
    font-size: ${sizeDefinitions.headerPrimarySize};
    font-size: 2em;
  }
  @media print {
    font-size: ${sizeDefinitions.headerPrimarySize};
    font-size: 1em;
  }
`

export const ContactDetails = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: center;
  @media screen and (min-width: 30em) {
    text-align: right;
  }
  @media print {
    display: flex;
    flex-direction: row;
    width: fit-content;

    li {
      margin: 1em;
    }
  }
`

export const ContactDetailsAnchorTag = styled.a`
  text-decoration: none;
  color: white;
`

const HeaderBase = styled.header`
  font-family: "Yantramanav", sans-serif; 
  font-size: ${sizeDefinitions.headerPrimarySize};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  height: fit-content;
  padding: 1em;
  @media screen and (min-width: 30em) {
    flex-basis: auto;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media print {
    height: 3em;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const Header = (props) => {
  const { name, site, emailLabel, emailLinkValue, phone } = props.config

  const { theme } = props

  const [localTheme, setData] = useState(theme)

  useEffect(() => {
    let {mainColors} = theme
    setData(mainColors)
  }, [theme])

  const list = [
    { label: site, href: site },
    { label: emailLabel, href: emailLinkValue },
    { label: phone }
  ]
  let content
  const objectNotEmpty = Object.keys(props).length > 0
  if (objectNotEmpty) {
    const DetailsList = list.map((dataToRender) => {
      return (
        <li key={dataToRender.label.toString()}>
          <ContactDetailsAnchorTag href={dataToRender.href} target='_blank'>
            {dataToRender.label}
          </ContactDetailsAnchorTag>
        </li>
      )
    })
    content = (
      <HeaderBase color={localTheme.headerPrimaryColor}>
        <ContactName>{name}</ContactName>
        <ContactDetails>{DetailsList}</ContactDetails>
      </HeaderBase>
    )
  } else {
    content = null
  }
  return content
}

export default Header
