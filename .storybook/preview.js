import { addParameters } from '@storybook/react';

import { setAddon, addDecorator } from '@storybook/react';

import JSXAddon from 'storybook-addon-jsx';
import { withKnobs} from '@storybook/addon-knobs/react';
addDecorator(withKnobs);
setAddon(JSXAddon);

addParameters({
  viewport: {
    viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});
