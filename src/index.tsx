/**
 * @class ExampleComponent
 */

import * as React from "react";
import styled from "styled-components"

export interface Props {
  children: React.ReactNode;
  text: string;
  onClick: () => void;
   /**
   * color to display
   *
   * @default " "
   **/
  color: "pink" | "green";
}
const Button = styled.button`
  background-color:${props => props.color};
    border:"none";
    color:"#ffffff";
    font-size:"20px";
    padding:"15px";
    border-radius:"7px";
`;
const ExampleComponent = (props: Props): JSX.Element => {
  const { onClick, children, text, color } = props;

  return (
    <Button color={color} onClick={(): void => onClick && onClick()}>
     {text} {' '} {children}
    </Button>
  );
};

export default ExampleComponent;
