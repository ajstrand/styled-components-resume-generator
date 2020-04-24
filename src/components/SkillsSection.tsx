import React from "react";

const SkillsSection = (props): JSX.Element => {
  const { config } = props;
  const skillsList = config.map((value, index) => {
    const nextVal = config[index + 1];
    return nextVal ? value.concat(", ") : value;
  });
  const jsx = <span className="description">{skillsList}</span>;
  return jsx;
};

export default SkillsSection;
