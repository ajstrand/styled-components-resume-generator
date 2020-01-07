import React from "react";
import { storiesOf } from "@storybook/react";
import ExampleComponent from "./index"
import { action } from "@storybook/addon-actions";
import {  text} from '@storybook/addon-knobs';
storiesOf("Example button", module)
  .add("red", () => <ExampleComponent text={text("color", "blue")} onClick={action("clicked")}/>)
