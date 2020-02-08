import React from "react";
import ExampleComponent from "../index"
import { action } from "@storybook/addon-actions";
import {  text} from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';


export default {
  component: ExampleComponent,
  title: 'Button',
  decorators:[withKnobs, jsxDecorator]
};

/*parameters: {
  componentSubtitle: 'Handy status label',
},*/

/**
 * This is a comment
 */
export const WithText = (): JSX.Element =>
<ExampleComponent color="green"
text={text("color", "blue")} onClick={action('clicked')}>
 </ExampleComponent>;

/**
 * This is another comment
 */
export const emoji = () => (
  <ExampleComponent color="pink"
   text={text("color", "blue")} onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ExampleComponent>
);

