import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import ResumeContent from './ResumeContent';


export default {
  component: ResumeContent,
  title: 'Resume',
  decorators:[withKnobs, jsxDecorator]
};
