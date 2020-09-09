import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import resumeDataObj from "../components/defaultResumeDataTemplate";
import Header from "../components/Header";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: Header,
  title: "Header",
  decorators: [jsxDecorator, withA11y],
};

export const Default = (): JSX.Element => (
  <Header config={resumeDataObj.header} />
);

Default.story = {
  parameters: {
    jest: ["header.test.tsx"],
  },
};
