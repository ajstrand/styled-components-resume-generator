import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import testResumeData from "../components/testResumeData";
import Header from "../components/Header";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: Header,
  title: "Header",
  decorators: [jsxDecorator, withA11y],
};

export const Default = (): JSX.Element => (
  <Header config={testResumeData.header} />
);

Default.story = {
  parameters: {
    jest: ["header.test.tsx"],
  },
};
