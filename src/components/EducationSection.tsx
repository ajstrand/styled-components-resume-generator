import React from "react";
import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription
} from "./ResumeBodyStyles";

const EducationSection = (props): JSX.Element => {
  const { config } = props;
  const list = config.map(section => (
    <div key={section.toString()}>
      <LeftColumn>
        <PlainLeftColumnName>{section.schoolName}</PlainLeftColumnName>
        <PlainLeftColumnDateRange>{section.dateRange}</PlainLeftColumnDateRange>
      </LeftColumn>
      <RightColumn>
        <PlainRightColumnTitle>{section.degreeTitle}</PlainRightColumnTitle>
        <PlainRightColumnDescription>
          {section.degreeDescription}
        </PlainRightColumnDescription>
      </RightColumn>
    </div>
  ));
  return <>{list}</>;
};

export default EducationSection;
