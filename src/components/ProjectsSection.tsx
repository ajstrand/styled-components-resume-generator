import React from "react";
import {
  ExperienceProjectItem,
  LeftColumn,
  RightColumn,
  ProjectDescList,
  ProjectDescListItem
} from "./ResumeBodyStyles";

const ProjectsSection = (props): JSX.Element => {
  const { config } = props;
  const projectList = config.map(project => {
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
  return <>{projectList}</>;
};

export default ProjectsSection;
