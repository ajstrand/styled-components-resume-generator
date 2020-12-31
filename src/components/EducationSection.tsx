import React from "react";
import generateColumns from "./BuildColumns";

const EducationSection = (props: { config: any }): JSX.Element => {
  const { config } = props;
  let data: { name: any; date: any; program: any };

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
