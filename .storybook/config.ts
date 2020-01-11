import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { setAddon, addDecorator } from '@storybook/react';

import JSXAddon from 'storybook-addon-jsx';
import { withKnobs} from '@storybook/addon-knobs/react';
addDecorator(withKnobs);
setAddon(JSXAddon);
const req = requireContext("../src", true, /\.stories\.tsx$/);

function loadStories() {
  const allStories = [];
  req.keys().forEach(fileName =>
    allStories.push(req(fileName)));
    return allStories;
}
configure(loadStories, module);
