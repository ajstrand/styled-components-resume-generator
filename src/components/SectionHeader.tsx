import React from "react";

import styled from "styled-components";
import { sizeDefinitions, mainColors } from "./Theme";
import { Section, HeaderCommonStyles } from "./ResumeBodyStyles";

const SectionHeader = styled.div`
  ${HeaderCommonStyles}
  border-bottom: 1px solid;
  font-size: ${sizeDefinitions.headerPrimarySize};
  text-transform: uppercase;
  color: ${mainColors.headerPrimaryColor};
  margin-bottom: -5px;
`;

const SectionAndHeader = (props): JSX.Element => {
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
