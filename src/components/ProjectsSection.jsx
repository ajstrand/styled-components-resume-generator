;/** @jsx h */
/** @jsxFrag Fragment */

import {
  ExperienceProjectItem,
  LeftColumn,
  RightColumn,
} from "./ResumeBodyStyles.jsx";

import styled from "styled-components";

export const ProjectDescList = styled.ul`
  padding: 0;
`;
export const ProjectDescListItem = styled.li`
  list-style-type: none;
`;

const ProjectsSection = (props) => {
  const { config } = props;
  if (config === null || config === undefined) {
    return null;
  }
  const projectList = config.map((project) => {
    const { title, dateRange, desc } = project;
    const jsx = (
      <ExperienceProjectItem key={title.toString()}>
        <LeftColumn>
          <span className="projectName">{title}</span>
          <span className="dateRange">{dateRange}</span>
        </LeftColumn>
        <RightColumn>
          <ProjectDescList>
            <ProjectDescListItem>{desc}</ProjectDescListItem>
          </ProjectDescList>
        </RightColumn>
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return projectList;
};

export default ProjectsSection;
