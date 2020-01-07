import React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from "../src/utils/utils";
const info = `
### Notes

Hello world!:

### Usage
~~~js
<div>This is an example component</div>
~~~

### To use this Storybook

Explore the panels on the left.
`;
(storiesOf('Welcome', module) as any )
.addParameters(wInfo(info))
.addWithJSX('to your new Storybook🎊',(
  () => <div>This is an example component</div>

));
