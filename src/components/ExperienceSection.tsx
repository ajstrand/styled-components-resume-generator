/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import Preact from "preact";
import { generateAllColumns } from "./BuildColumns";
import { ExperienceProjectItem } from "./ResumeBodyStyles";

interface Job {
  companyName: string;
  dateRange: string;
  jobTitle: string;
  jobDescription: object[];
}

interface Jobs {
  config: Job[];
}

interface Item {
  text: string;
}

const ExperienceSection = (props): JSX.Element => {
  const { config }: Jobs = props;
  const list = config.map((job) => {
    const { companyName, dateRange, jobTitle, jobDescription }: Job = job;
    const jobTasks = jobDescription.map((item: Item, index) => {
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
