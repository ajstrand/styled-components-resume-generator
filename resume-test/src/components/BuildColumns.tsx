/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import { h } from "preact";
import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription,
} from "./ResumeBodyStyles";

const generateColumns = (
  first,
  second,
  third
) => {
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
) => {
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
