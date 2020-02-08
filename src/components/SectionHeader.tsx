import  styled from 'styled-components';
import { HeaderCommonStyles } from './Header';
import { sizeDefinitions, mainColors } from './Theme';

const SectionHeader = styled.div `
  ${HeaderCommonStyles}
  border-bottom: 1px solid;
  font-size: ${sizeDefinitions.headerPrimarySize};
  text-transform: uppercase;
  color: ${mainColors.headerPrimaryColor};
  margin-bottom: -5px;
`;

export default SectionHeader
