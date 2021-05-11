/** @jsx h */
/** @jsxFrag Fragment */

import {h} from "preact"
import styled from "styled-components";
import myTheme from "./baseTheme";
import { Section, HeaderCommonStyles } from "./ResumeBodyStyles.jsx";
const {mainColors, sizeDefinitions} = myTheme

const SectionHeader = styled.div`
  ${HeaderCommonStyles}
  border-bottom: 1px solid;
  font-size: ${sizeDefinitions.headerPrimarySize};
  text-transform: uppercase;
  color: ${mainColors.headerPrimaryColor};
  margin-bottom: -5px;
`;

const SectionAndHeader = (props) => {
  const { sectionTitle, children } = props;
  const jsx = (
    <Section>
      <SectionHeader>{sectionTitle}</SectionHeader>
      {children}
    </Section>
  );
  return jsx;
};

export default SectionAndHeader;
