/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import { generateAllColumns } from "./BuildColumns";
import { ExperienceProjectItem } from "./ResumeBodyStyles";

const ExperienceSection = (props) => {
  const { config } = props;
  const list = config.map((job) => {
    const { companyName, dateRange, jobTitle, jobDescription } = job;
    const jobTasks = jobDescription.map((item, index) => {
      const desc = <li key={index.toString()}>{item.text}</li>;
      return desc;
    });
    const jsx = (
      <ExperienceProjectItem key={companyName.toString()}>
        {generateAllColumns(companyName, dateRange, jobTitle, jobTasks, "ul")}
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return <>{list}</>;
};

export default ExperienceSection;
