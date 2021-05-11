/** @jsx h */
/** @jsxFrag Fragment */

import {h} from "preact"
import { styled } from '@linaria/react';

import PropTypes from "prop-types";
import { useTheme } from './Theme';

import {
  LeftColumn,
  RightColumn,
  TwoColumnSection,
  ResumeBody,
} from "./ResumeBodyStyles.jsx";

import Header from "./Header.jsx"

import ProjectsSection from "./ProjectsSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import EducationSection from "./EducationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import SectionAndHeader from "./SectionHeader.jsx";

const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: ${(props) =>
    props.resumeWidth ? props.resumeWidth : "100%"};
  @media print {
    width: 100%;
  }
`;
const Block = (props) => {
  const { componentType, config, theme } = props;
  const components = {
    experience: ExperienceSection,
    projects: ProjectsSection,
    education: EducationSection,
    skills: SkillsSection,
  };
  const Tag = components[componentType];
  const resumeDataToRender = config[componentType];
  const dataExists =
    !!(resumeDataToRender !== null && resumeDataToRender !== undefined);
  return Tag && dataExists ? (
    <SectionAndHeader theme={theme} sectionTitle={componentType}>
      <Tag theme={theme} config={resumeDataToRender} />
    </SectionAndHeader>
  ) : null;
};

const Title = styled.h1`
font-size:40px!important;
border: 4px solid;
color: ${props => props.textColor};
`;

const ResumeContent = (props) => {
  const { config} = props;
  const theme = useTheme()

  return (
    // <Title textColor={theme.userColors.pink}>hello</Title>
    <ResumeGridContainer>
      <Header theme={theme} config={config.header} />
      <ResumeBody>
        <Block theme={theme} componentType="experience" config={config} />
        <Block theme={theme} componentType="projects" config={config} />
        <TwoColumnSection>
          <LeftColumn>
            <Block theme={theme} componentType="education" config={config} />
          </LeftColumn>
          <RightColumn>
            <Block theme={theme} componentType="skills" config={config} />
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