/** @jsx h */
/** @jsxFrag Fragment */

import {h} from "preact"
import styled from "styled-components";
import myTheme from "./baseTheme";
import { Section, HeaderCommonStyles } from "./ResumeBodyStyles.jsx";
const {sizeDefinitions} = myTheme
import { useTheme } from './Theme';

import { useState, useEffect } from "preact/hooks";

const SectionHeader = styled.div`
  ${HeaderCommonStyles}
  border-bottom: 1px solid;
  font-size: ${sizeDefinitions.headerPrimarySize};
  text-transform: uppercase;
  color: ${props => props.color};
  margin-bottom: -5px;
`;

const SectionAndHeader = (props) => {
  const { sectionTitle, children} = props;
  const theme = useTheme()

  const [localTheme, setData] = useState(theme)


  useEffect(() => {
    setData(theme.mainColors)
  }, [theme])
  const jsx = (
    <Section>
      <SectionHeader color={localTheme.accentColor}>{sectionTitle}</SectionHeader>
      {children}
    </Section>
  );
  return jsx;
};

export default SectionAndHeader;
