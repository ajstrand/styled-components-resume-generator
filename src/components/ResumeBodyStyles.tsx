import styled, { css } from "styled-components";
import { sizeDefinitions, mainColors } from "./Theme";

export const HeaderCommonStyles = css`
  font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: ${sizeDefinitions.headerPrimarySize};
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;
export const BodyCommonStyles = css`
  font-weight: 500;
  font-family: "Khula", sans-serif;
  list-style-type: none;
  font-size: 0.95em;
  color: ${mainColors.textSecondaryColor};
  @media screen and (min-width: 30em) {
    list-style-type: circle;
  }
`;
export const ResumeBody = styled.div`
  padding: 10px;
  display: grid;
  grid-column: 1;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.primarySpacing};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90vw;
`;
export const PlainLeftColumn = styled(Column)`
  flex-basis: auto;
`;

export const PlainRightColumn = styled(Column)`
  flex-basis: auto;
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
  margin: 0;
  flex-basis: auto;
  @media screen and (min-width: 30em) {
    flex-basis: 200px;
    flex-grow: 9999;
    margin: 0 1em 1em 0;
  }
`;

export const RightColumn = styled(Column)`
  flex-basis: auto;
  @media screen and (min-width: 30em) {
    flex-basis: 100px;
    flex-grow: 1;
    min-width: 300px;
  }
`;

export const Section = styled.div`
  grid-auto-rows: min-content;
  display: grid;
  grid-gap: ${sizeDefinitions.smallSpacing};
`;

const ExperienceProjectSectionCommonStyles = css`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.smallSpacing};
`;

export const ProjectDescList = styled.ul`
  padding: 0;
`;
export const ProjectDescListItem = styled.li`
  list-style-type: none;
`;
export const ExperienceProjectSection = styled.div`
  ${ExperienceProjectSectionCommonStyles}
`;

const ExperienceProjectItemCommonStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  flex-basis: 90vw;
  @media screen and (min-width: 30em) {
    display: grid;
    grid-template-areas: "title description";
    grid-gap: ${sizeDefinitions.primarySpacing};
    grid-template-columns: minmax(auto, 135px) 1fr;
  }
`;

export const ExperienceProjectItem = styled.div`
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
