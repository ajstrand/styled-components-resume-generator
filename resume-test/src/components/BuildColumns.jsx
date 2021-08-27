/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from 'preact'
import {
  LeftColumn,
  PlainLeftColumnName,
  PlainLeftColumnDateRange,
  RightColumn,
  PlainRightColumnTitle,
  PlainRightColumnDescription
} from './ResumeBodyStyles.jsx'

const generateColumns = (first, second, third) => {
  return (
    <div class='details'>
      <LeftColumn class='details'>
        <PlainLeftColumnName>{first}</PlainLeftColumnName>
        <PlainLeftColumnDateRange>{second}</PlainLeftColumnDateRange>
      </LeftColumn>
      <RightColumn>
        <PlainRightColumnTitle>{third}</PlainRightColumnTitle>
      </RightColumn>
    </div>
  )
}

export const generateAllColumns = (first, second, third, fourth, modifier) => {
  return (
    <>
      {generateColumns(first, second, third)}
      <PlainRightColumnDescription as={modifier ? modifier : null}>
        {fourth}
      </PlainRightColumnDescription>
    </>
  )
}

export default generateColumns
