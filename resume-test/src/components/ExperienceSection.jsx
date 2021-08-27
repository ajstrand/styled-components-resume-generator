;/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import { generateAllColumns } from "./BuildColumns.jsx";
import { ExperienceProjectItem } from "./ResumeBodyStyles.jsx";

const ExperienceSection = (props) => {
  const { config } = props;
  const list = config.map((job) => {
    const { companyName, dateRange, jobTitle, jobDescription } = job;

    const jobTasks = jobDescription ? jobDescription.map((item, index) => {
      const desc = <li key={index.toString()}>{item.text}</li>;
      return desc;
    }) : null;
    const jsx = (
      <ExperienceProjectItem key={companyName.toString()}>
        {generateAllColumns(companyName, dateRange, jobTitle, jobTasks, "ul")}
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return list;
};

export default ExperienceSection;
