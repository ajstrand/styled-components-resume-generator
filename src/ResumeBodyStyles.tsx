import styled, {css} from "styled-components"
import { sizeDefinitions } from './Theme';
import { HeaderCommonStyles, BodyCommonStyles } from './Header';
export const ResumeBody = styled.div `
  padding: 20px;
  display: grid;
  grid-column: 1;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.primarySpacing};
`;

export const twoColumnSection = styled.div `
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;

`;

export const LeftColumn = styled(twoColumnSection) `
 -ms-flex-preferred-size: 200px;
        flex-basis: 200px;
    -webkit-box-flex: 9999;
        -ms-flex-positive: 9999;
            flex-grow: 9999;
    margin: 0 1em 1em 0;
`;

export const RightColumn = styled(twoColumnSection)`
-ms-flex-preferred-size:100px;
        flex-basis:100px;
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    min-width: 300px;
`

export const EducationSection = styled(RightColumn)`
 display: grid;
      grid-auto-rows: -webkit-min-content;
      grid-auto-rows: min-content;
      grid-gap: ${sizeDefinitions.smallSpacing};
      margin-bottom: ${sizeDefinitions.primarySpacing}

`;

export const educationItem = styled(EducationSection)`
  display: grid;
        grid-template-columns: 170px 1fr;
        grid-template-areas: "title description";
        grid-gap: ${sizeDefinitions.primarySpacing};

`;

export const SkillsSection = styled(RightColumn)`
   grid-auto-rows: -webkit-min-content;
      grid-auto-rows: min-content;
      display: grid;
      grid-gap:  ${sizeDefinitions.smallSpacing};
`;

const ExperienceProjectSectionCommonStyles = css`
    display: grid;
  grid-auto-rows: auto;
  grid-gap: ${sizeDefinitions.smallSpacing} ;

`;

export const ExperienceProjectSection = styled.div `
${ExperienceProjectSectionCommonStyles}
`;

const ExperienceProjectItemCommonStyles = css`
    display: grid;
  grid-template-columns: minmax(auto, 135px) 1fr;
  grid-template-areas: "title description";
  grid-gap: ${sizeDefinitions.primarySpacing};

`;

export const ExperienceProjectItem = styled.div`
    ${ExperienceProjectItemCommonStyles}
`;

export const PlainLeftColumn = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;

`;

export const PlainLeftColumnNameStyles = styled(PlainLeftColumn)`
${HeaderCommonStyles}
`;

export const PlainLeftColumnDateRange = styled(PlainLeftColumn)`
${BodyCommonStyles}
    text-transform: uppercase;
    font-size: 0.85em;
`;

export const PlainRightColumn = styled.div`
  grid-area: description;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;


  & > ul {
    margin: 0;
    padding-left: 1.2em;
    list-style-type: square;
  }

  & > .jobTitle ~ .jobTitle {
    margin-top: 10px;
  }

`;

export const PlainRightColumnTitle = styled(PlainRightColumn)`
  ${HeaderCommonStyles}
`;

export const PlainRightColumnDescription = styled(PlainRightColumn)`
  ${BodyCommonStyles}
`;
