/* eslint-disable no-unused-vars */
/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import {h} from "preact"
import { styled } from '@linaria/react';

import PropTypes from "prop-types";
// import {
//   LeftColumn,
//   RightColumn,
//   TwoColumnSection,
//   ResumeBody,
// } from "./ResumeBodyStyles";
// import Header from "./Header";
// import ProjectsSection from "./ProjectsSection";
// import SkillsSection from "./SkillsSection";
// import EducationSection from "./EducationSection";
// import ExperienceSection from "./ExperienceSection";
// import SectionAndHeader from "./SectionHeader";
// interface Props {
//   resumeWidth?: string;
// }

const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: ${(props) =>
    props.resumeWidth ? props.resumeWidth : "100%"};
  @media print {
    width: 100%;
  }
`;
// const Block = (props) => {
//   const { componentType, config, theme } = props;
//   const components = {
//     experience: ExperienceSection,
//     projects: ProjectsSection,
//     education: EducationSection,
//     skills: SkillsSection,
//   };
//   const Tag = components[componentType];
//   const resumeDataToRender = config[componentType];
//   const dataExists =
//     !!(resumeDataToRender !== null && resumeDataToRender !== undefined);
//   return Tag && dataExists ? (
//     <SectionAndHeader theme={theme} sectionTitle={componentType}>
//       <Tag theme={theme} config={resumeDataToRender} />
//     </SectionAndHeader>
//   ) : null;
// };
const ResumeContent = (props) => {
  const { config, theme } = props;
  console.log(theme)
  const Title = styled.h1`
  font-family: ${({theme}) => theme.userColors.pink};
`;
  return (
    <Title theme={theme} />
    // <ResumeGridContainer>
    //   <Header theme={theme} config={config.header} />
    //   <ResumeBody>
    //     <Block theme={theme} componentType="experience" config={config} />
    //     <Block theme={theme} componentType="projects" config={config} />
    //     <TwoColumnSection>
    //       <LeftColumn>
    //         <Block theme={theme} componentType="education" config={config} />
    //       </LeftColumn>
    //       <RightColumn>
    //         <Block theme={theme} componentType="skills" config={config} />
    //       </RightColumn>
    //     </TwoColumnSection>
    //   </ResumeBody>
    // </ResumeGridContainer>
  );
};

ResumeContent.propTypes = {
  config: PropTypes.object,
};

export default ResumeContent;
