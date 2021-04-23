/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import Preact from "preact";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  LeftColumn,
  RightColumn,
  TwoColumnSection,
  ResumeBody,
} from "./ResumeBodyStyles";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SectionAndHeader from "./SectionHeader";

interface Props {
  resumeWidth?: string;
}

const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: ${(props: Props): string =>
    props.resumeWidth ? props.resumeWidth : "100%"};
  @media print {
    width: 100%;
  }
`;
const Block = (props) => {
  const { componentType, config } = props;
  const components = {
    experience: ExperienceSection,
    projects: ProjectsSection,
    education: EducationSection,
    skills: SkillsSection,
  };
  const Tag = components[componentType];
  const resumeDataToRender = config[componentType];
  const dataExists =
    resumeDataToRender !== null && resumeDataToRender !== undefined
      ? true
      : false;
  return Tag && dataExists ? (
    <SectionAndHeader sectionTitle={componentType}>
      <Tag config={resumeDataToRender} />
    </SectionAndHeader>
  ) : null;
};
const ResumeContent = (props): JSX.Element => {
  const { config } = props;

  return (
    <ResumeGridContainer>
      <Header config={config.header} />
      <ResumeBody>
        <Block componentType="experience" config={config} />
        <Block componentType="projects" config={config} />
        <TwoColumnSection>
          <LeftColumn>
            <Block componentType="education" config={config} />
          </LeftColumn>
          <RightColumn>
            <Block componentType="skills" config={config} />
          </RightColumn>
        </TwoColumnSection>
      </ResumeBody>
    </ResumeGridContainer>
  );
};

ResumeContent.propTypes = {
  config: PropTypes.object,
};

export default ResumeContent;
