import React from "react";
import {
  ExperienceProjectItem,
  PlainLeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  PlainRightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription
} from "./ResumeBodyStyles";

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
  const list = config.map(job => {
    const { companyName, dateRange, jobTitle, jobDescription }: Job = job;
    console.log(jobDescription);
    const jobTasks = jobDescription.map((item: Item, index) => {
      const desc = <li key={index.toString()}>{item.text}</li>;
      return desc;
    });
    const jsx = (
      <ExperienceProjectItem key={companyName.toString()}>
        <PlainLeftColumn>
          <PlainLeftColumnName>{companyName}</PlainLeftColumnName>
          <PlainLeftColumnDateRange>{dateRange}</PlainLeftColumnDateRange>
        </PlainLeftColumn>
        <PlainRightColumn>
          <PlainRightColumnTitle>{jobTitle}</PlainRightColumnTitle>
          <PlainRightColumnDescription as="ul">
            {jobTasks}
          </PlainRightColumnDescription>
        </PlainRightColumn>
      </ExperienceProjectItem>
    );
    return jsx;
  });
  return <>{list}</>;
};

export default ExperienceSection;
