;/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import generateColumns from "./BuildColumns.jsx";
import { EducationDetails } from "./ResumeBodyStyles.jsx";
const EducationSection = (props) => {
  const { config } = props;
  let data;

  const list = config.map((section) => {
    data = {
      name: section.name,
      date: section.dateRange,
      program: section.programOrDegree,
    };

    const { name, date, program } = data;

    return (
      <EducationDetails key={section.toString()}>
        {generateColumns(name, date, program)}
      </EducationDetails>
    );
  });
  return list;
};

export default EducationSection;
