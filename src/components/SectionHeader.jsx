
import styled from '@emotion/styled'
import { Section } from "./ResumeBodyStyles.jsx";

import { useState, useEffect } from "preact/hooks";

const SectionHeader = styled.div`
    font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: var(--headerPrimarySize);
  color: var(--textPrimaryColor);
  text-transform: capitalize;

  border-bottom: 1px solid;
  font-size: var(--headerPrimarySize);
  text-transform: uppercase;
  color: ${props => props.color};
  margin-bottom: -5px;
`;

const SectionAndHeader = (props) => {
  const { sectionTitle, children} = props;



  // useEffect(() => {
  //   setData(theme.mainColors)
  // }, [theme])
  const jsx = (
    <Section>
      <SectionHeader color={"#ffdffd"}>{sectionTitle}</SectionHeader>
      {children}
    </Section>
  );
  return jsx;
};

export default SectionAndHeader;
