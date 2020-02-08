import { addParameters } from '@storybook/react';

import { setAddon, addDecorator } from '@storybook/react';

import JSXAddon from 'storybook-addon-jsx';
import { withKnobs} from '@storybook/addon-knobs/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
addDecorator(withKnobs);
setAddon(JSXAddon);

addParameters({
  viewport: {
    defaultViewport: INITIAL_VIEWPORTS,
  },
});
