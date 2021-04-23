/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import Preact from "preact";
import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription,
} from "./ResumeBodyStyles";

const generateColumns = (
  first: string,
  second: string,
  third: string
): JSX.Element => {
  return (
    <>
      <LeftColumn>
        <PlainLeftColumnName>{first}</PlainLeftColumnName>
        <PlainLeftColumnDateRange>{second}</PlainLeftColumnDateRange>
      </LeftColumn>
      <RightColumn>
        <PlainRightColumnTitle>{third}</PlainRightColumnTitle>
      </RightColumn>
    </>
  );
};

export const generateAllColumns = (
  first,
  second,
  third,
  fourth,
  modifier
): JSX.Element => {
  return (
    <>
      {generateColumns(first, second, third)}
      <PlainRightColumnDescription as={modifier ? modifier : null}>
        {fourth}
      </PlainRightColumnDescription>
    </>
  );
};

export default generateColumns;
