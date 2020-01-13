import styled, { css } from "styled-components";
import { sizeDefinitions } from "./Theme";
import { HeaderCommonStyles, BodyCommonStyles } from "./Header";
export const ResumeBody = styled.div`
  padding: 20px;
  display: grid;
  grid-column: 1;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.primarySpacing};
`;

export const Section = styled.div``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PlainLeftColumn = styled(Column)``;

export const PlainRightColumn = styled(Column)`
  grid-area: description;
  & > ul {
    margin: 0;
    padding-left: 1.2em;
    list-style-type: square;
  }

  & > .jobTitle ~ .jobTitle {
    margin-top: 10px;
  }
`;

export const TwoColumnSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftColumn = styled(Column)`
  flex-basis: 200px;
  flex-grow: 9999;
  margin: 0 1em 1em 0;
`;

export const RightColumn = styled(Column)`
  flex-basis: 100px;
  flex-grow: 1;
  min-width: 300px;
`;

export const EducationSection = styled(LeftColumn)``;

export const EducationItem = styled.div``;

export const SkillsSection = styled(RightColumn)`
  grid-auto-rows: min-content;
  display: grid;
  grid-gap: ${sizeDefinitions.smallSpacing};
`;

const ExperienceProjectSectionCommonStyles = css`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.smallSpacing};
`;

export const ExperienceProjectSection = styled.div`
  ${ExperienceProjectSectionCommonStyles}
`;

const ExperienceProjectItemCommonStyles = css`
  display: grid;
  grid-template-columns: minmax(auto, 135px) 1fr;
  grid-template-areas: "title description";
  grid-gap: ${sizeDefinitions.primarySpacing};
`;

export const ExperienceProjectItem = styled.p`
  ${ExperienceProjectItemCommonStyles}
`;

export const PlainLeftColumnName = styled(PlainLeftColumn)`
  ${HeaderCommonStyles}
`;

export const PlainLeftColumnDateRange = styled(PlainLeftColumn)`
  ${BodyCommonStyles}
  text-transform: uppercase;
  font-size: 0.85em;
`;

export const PlainRightColumnTitle = styled(PlainRightColumn)`
  ${HeaderCommonStyles}
`;

export const PlainRightColumnDescription = styled(PlainRightColumn)`
  ${BodyCommonStyles}
`;
