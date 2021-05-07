/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import generateColumns from "./BuildColumns";

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
      <section key={section.toString()}>
        {generateColumns(name, date, program)}
      </section>
    );
  });
  return <>{list}</>;
};

export default EducationSection;
