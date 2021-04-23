import { h } from "preact";
import "./style.css";
import StyledResume from "styledResume";
export default function App(props) {
  return (
    <div>
      <StyledResume />
      <h1 style={{ color: props.color }}>Hello, World!</h1>
    </div>
  );
}
