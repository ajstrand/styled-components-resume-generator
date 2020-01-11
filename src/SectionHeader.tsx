import  { styled } from 'styled-components';
import { HeaderCommonStyles } from './Header';

const SectionHeader = styled.div `
  ${HeaderCommonStyles}
  border-bottom: 1px solid;
  font-size: $headerPrimarySize;
  text-transform: uppercase;
  color: $headerPrimaryColor;
  margin-bottom: -5px;
`;

export default SectionHeader
