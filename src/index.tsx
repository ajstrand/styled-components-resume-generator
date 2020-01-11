/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";

export interface Props {
  children: React.ReactNode;
  text:String;
  onClick: () => void;
   /**
   * Value to display, either empty (" ") or "X" / "O".
   *
   * @default " "
   **/
  color:"pink" | "green"
}

const ExampleComponent = (props: Props) => {
  const { onClick, children, text, color } = props;
  const newShit = {
    backgroundColor:color,
    border:"none",
    color:"white",
    fontSize:"20px",
    padding:"15px",
    borderRadius:"7px"
  }
  return (
    <button style={newShit} className={styles.test} onClick={() => onClick && onClick()}>
     {text} {' '} {children}
    </button>
  );
};

export default ExampleComponent;
