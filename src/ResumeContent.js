import React from "react";
import "./resumeStyles.scss";
import styled from "styled-components";

const resumeDataObj = {
  name: "Name",
  site: "example.com",
  email: "mailto:example.com",
  phone: "444-555-6661",
  education: [
    {
      schoolName: "A school",
      dateRange: "200X - 20XX",
      degreeTitle: "Bachelor's",
      degreeDescription: "Computer Science"
    }
  ],
  experience: [
    {
      companyName: "Tech Co.",
      dateRange: "June 201XX - Present",
      jobTitle: "Engineering Managner",
      jobDescription: [
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
      ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
      te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,
      nulla graeci quaeque an sit. Sumo ullum velit eam et.
      Te vix tollit expetendis, te has veniam eligendi rationibus. `
        },
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
      ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
      te atqui possit quo.`
        }
      ]
    },
    {
      companyName: "Software Corp",
      dateRange: "May 201XX - September 20XX",
      jobTitle: "Software Engineer",
      jobDescription: [
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
          ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
          te atqui possit quo. `
        },
        {
          text: `Ex novum deserunt consetetur mea, his te dolores constituto,
          ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
          te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,
          nulla graeci quaeque an sit. Sumo ullum velit eam et.
          Te vix tollit expetendis, te has veniam eligendi rationibus. `
        }
      ]
    }
  ],
  projects: [
    {
      dateRange: "June 20XX",
      title: "Loren ipsum",
      text: `Ex novum deserunt consetetur mea, his te dolores constituto,
          ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
          te atqui possit quo. `
    },
    {
      dateRange: "October 20XX",
      title: "Loren ipsum",
      desc: `Ex novum deserunt consetetur mea, his te dolores constituto,
          ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,
          te atqui possit quo. `
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Go"],
    technologies: [
      "React",
      "React Native",
      "Jest",
      "Webpack",
      "JQuery",
      "SCSS",
      "NodeJS",
      "SQL"
    ]
  }
};
const createSectionAndHeader = (sectionTitle, chilren) => {
  const jsx = (
    <div className={`${sectionTitle}Section`}>
      <span className="sectionHeader">{sectionTitle}</span>
      {chilren}
    </div>
  );
  return jsx;
};
const createExperienceSection = () => {
  const list = resumeDataObj.experience.map(block => {
    const jsx = (
      <div className="experienceItem">
        <div className="leftColumn">
          <span className="companyName">{block.companyName}</span>
          <span className="dateRange">{block.dateRange}</span>
        </div>
        <span className="rightColumn">
          <span className="jobTitle">{block.jobTitle}</span>
          <ul className="jobDescription">
            {block.jobDescription.map((item, index) => {
              const desc = <li key={index.toString()}>{item.text}</li>;
              return desc;
            })}
          </ul>
        </span>
      </div>
    );
    return jsx;
  });
  return list;
};

const createProjectSection = () => {
  const projectList = resumeDataObj.projects.slice(0, 3).map(projectObj => {
    const project = projectObj.node;
    const jsx = (
      <div className="projectItem">
        <div className="leftColumn">
          <span className="projectName">{project.title}</span>
          <span className="dateRange">{project.dateRange}</span>
        </div>
        <span className="rightColumn">
          <ul className="projectDescription">
            <li>{project.desc}</li>
          </ul>
        </span>
      </div>
    );
    return jsx;
  });
  return projectList;
};
const createEducationSection = () => {
  const list = resumeDataObj.education.map(section => {
    const jsx = (
      <div className="educationItem">
        <div className="leftColumn">
          <span className="schoolName">{section.schoolName}</span>
          <span className="dateRange">{section.dateRange}</span>
        </div>
        <span className="rightColumn">
          <span className="degreeTitle">{section.degreeTitle}</span>
          <span className="degreeDescription">{section.degreeDescription}</span>
        </span>
      </div>
    );
    return jsx;
  });
  return list;
};
const createSkillsSection = () => {
  const { languages, technologies } = resumeDataObj.skills;
  const array = languages.concat(technologies);
  const skillsList = array.map((value, index) =>
    array[index + 1] !== undefined ? value.concat(", ") : value
  );
  const jsx = <span className="description">{skillsList}</span>;
  return jsx;
};
const createHeader = () => {
  const jsx = (
    <div className="header">
      <span className="contactName">{resumeDataObj.name}</span>
      <ul className="contactDetails">
        <li>
          <a href={resumeDataObj.site} target="_blank">
            {resumeDataObj.site}
          </a>
        </li>
        <li>
          <a href={resumeDataObj.email}>{resumeDataObj.email}</a>
        </li>
        <li>
          <a href={resumeDataObj.phone}>{resumeDataObj.phone}</a>
        </li>
      </ul>
    </div>
  );
  return jsx;
};
const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: 60%;
  @media print {
    width: 100%;
  }
`;
const ResumeContent = () => {
  return (
    <ResumeGridContainer>
      {createHeader()}
      <div className="resumeBody">
        {createSectionAndHeader("experience", createExperienceSection())}
        {createSectionAndHeader("projects", createProjectSection(projects))}
        <div className="twoColumnSection">
          <div className="leftColumn">
            {createSectionAndHeader("education", createEducationSection())}
          </div>
          <div className="rightColumn">
            {createSectionAndHeader("skills", createSkillsSection())}
          </div>
        </div>
      </div>
    </ResumeGridContainer>
  );
};

export default ResumeContent;
