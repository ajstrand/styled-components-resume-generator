import React from "react";
import styled from "styled-components";
import {
  LeftColumn, PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription,
  TwoColumnSection, ResumeBody,
  ExperienceProjectItem,
  PlainLeftColumn, PlainLeftColumnName,
  PlainRightColumn, EducationItem, ProjectDescListItem, ProjectDescList, Section
} from "./ResumeBodyStyles";
import Header, { ContactDetails, ContactDetailsAnchorTag, ContactName } from './Header';
import SectionHeader from "./SectionHeader";
import resumeDataObj from './resumeData';



const CreateSectionAndHeader = (props): JSX.Element => {
  const { sectionTitle, children } = props;
  const jsx = (
    <Section>
      <SectionHeader>{sectionTitle}</SectionHeader>
      {children}
    </Section>
  );
  return jsx;
};
const CreateExperienceSection = (): JSX.Element => {
  const list = resumeDataObj.experience.map(block => {
    const jsx = (
      <ExperienceProjectItem>
        <PlainLeftColumn>
          <PlainLeftColumnName>{block.companyName}</PlainLeftColumnName>
          <PlainLeftColumnDateRange>{block.dateRange}</PlainLeftColumnDateRange>
        </PlainLeftColumn>
        <PlainRightColumn>
          <PlainRightColumnTitle>{block.jobTitle}</PlainRightColumnTitle>
          <PlainRightColumnDescription>
            {block.jobDescription.map((item, index) => {
              const desc = <li key={index.toString()}>{item.text}</li>;
              return desc;
            })}
          </PlainRightColumnDescription>
        </PlainRightColumn>
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return <>{list}</>;
};

const CreateProjectsSection = (): JSX.Element => {
  const projectList = resumeDataObj.projects.map(project => {
    const jsx = (
      <ExperienceProjectItem>
        <LeftColumn>
          <span className="projectName">{project.title}</span>
          <span className="dateRange">{project.dateRange}</span>
        </LeftColumn>
        <RightColumn>
          <ProjectDescList>
            <ProjectDescListItem>{project.desc}</ProjectDescListItem>
          </ProjectDescList>
        </RightColumn>
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return <>{projectList}</>;
};
const CreateEducationSection = (): JSX.Element => {
  const list = resumeDataObj.education.map(section =>
    <EducationItem key={section.toString()}>
      <LeftColumn>
        <PlainLeftColumnName>{section.schoolName}</PlainLeftColumnName>
        <PlainLeftColumnDateRange>{section.dateRange}</PlainLeftColumnDateRange>
      </LeftColumn>
      <RightColumn>
        <PlainRightColumnTitle>{section.degreeTitle}</PlainRightColumnTitle>
        <PlainRightColumnDescription>{section.degreeDescription}</PlainRightColumnDescription>
      </RightColumn>
    </EducationItem>
  );
  return <>{list}</>;

};
const CreateSkillsSection = (): JSX.Element => {
  const skillsList = resumeDataObj.skills.map((value, index) => {
  const nextVal =  resumeDataObj.skills[index + 1];
   return nextVal ? value.concat(", ") : value
  }
  );
  const jsx = <span className="description">{skillsList}</span>;
  return jsx;
};
const CreateHeader = (): JSX.Element => {
  const list = [
    resumeDataObj.site,
    resumeDataObj.email,
    resumeDataObj.phone
  ]
  const DetailsList = list.map(dataToRender => {
    return <li key={dataToRender.toString()}>
      <ContactDetailsAnchorTag href={dataToRender} target="_blank">
        {dataToRender}
      </ContactDetailsAnchorTag>
    </li>
  })
  const content = <Header>
    <ContactName>{resumeDataObj.name}</ContactName>
    <ContactDetails>
      {DetailsList}
    </ContactDetails>
  </Header>;
  return content;
};
const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: ${props => props.resumeWidth ? props.resumeWidth : "100%"};
  @media print {
    width: 100%;
  }
`;
const ResumeContent = (): JSX.Element => {
  return (
    <ResumeGridContainer>
      <CreateHeader />
      <ResumeBody>
      <CreateSectionAndHeader sectionTitle="experience">
      <CreateExperienceSection />
            </CreateSectionAndHeader>
            <CreateSectionAndHeader sectionTitle="projects">
      <CreateProjectsSection />
            </CreateSectionAndHeader>
        <TwoColumnSection>
          <LeftColumn>
            <CreateSectionAndHeader sectionTitle="education">
            <CreateEducationSection />
            </CreateSectionAndHeader>
          </LeftColumn>
          <RightColumn>
          <CreateSectionAndHeader sectionTitle="skills">
            <CreateSkillsSection />
            </CreateSectionAndHeader>
          </RightColumn>
        </TwoColumnSection>
      </ResumeBody>
    </ResumeGridContainer>
  );
};

export default ResumeContent;
