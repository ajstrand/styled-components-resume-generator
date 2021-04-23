/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import Preact, { h, Fragment } from "preact";
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
