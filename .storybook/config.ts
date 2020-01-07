import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import JSXAddon from 'storybook-addon-jsx';
import { withKnobs} from '@storybook/addon-knobs/react';
addDecorator(withInfo);
addDecorator(withKnobs);
setAddon(JSXAddon);
const req = requireContext("../src", true, /\.stories\.tsx$/);

function loadStories() {
  require('./welcomeStory.tsx');
  req.keys().forEach(req);
}
configure(loadStories, module);
