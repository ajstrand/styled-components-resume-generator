import { styled} from '@linaria/react';
import { css } from '@linaria/core';
import myTheme from "./baseTheme.js";

const {sizeDefinitions, mainColors} = myTheme


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
export const ExperienceProjectSection = styled.div`
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
  @media print {
    .details {
      flex-direction: row;
    }
  }
`;

export const ExperienceProjectItem = styled.div`
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
  @media print {
    margin-top: 0.2em;
    .details {
      flex-direction: row;
      display: flex;
      margin-right: 1em;

      div {
        margin-right: 1em;
      }
    }
  }
`;

export const PlainLeftColumnName = styled(PlainLeftColumn)`
    font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: ${sizeDefinitions.headerPrimarySize};
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;

export const PlainLeftColumnDateRange = styled(PlainLeftColumn)`
  ${BodyCommonStyles}
  text-transform: uppercase;
  font-size: 0.85em;
`;

export const PlainRightColumnTitle = styled(PlainRightColumn)`
  font-weight: 600;
  font-family: "Yantramanav", sans-serif;
  font-size: ${sizeDefinitions.headerPrimarySize};
  color: ${mainColors.textPrimaryColor};
  text-transform: capitalize;
`;

export const PlainRightColumnDescription = styled(PlainRightColumn)`
  ${BodyCommonStyles}
  @media print {
    margin: 0!important;
    line-height: 11px;
    font-size: 10px!important;
  }


`;

export const EducationDetails = styled.div`
   @media print {
    .details {
      font-size: 9px;
      flex-direction: row;
      display: flex;
      margin-right: 1em;

      div {
        margin-right: 1em;
      }
    }
  }
`
