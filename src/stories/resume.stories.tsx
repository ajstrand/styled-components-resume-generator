import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import ResumeContent from '../components/ResumeContent';


export default {
  component: ResumeContent,
  title: 'Resume',
  decorators:[withKnobs, jsxDecorator]
};

export const Default = (): JSX.Element => <ResumeContent />;
