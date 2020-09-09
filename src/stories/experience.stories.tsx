import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import testResumeData from "../components/testResumeData";
import ExperienceSection from "../components/ExperienceSection";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: ExperienceSection,
  title: "Header",
  decorators: [jsxDecorator, withA11y],
};

export const Default = (): JSX.Element => (
  <ExperienceSection config={testResumeData.experience} />
);

Default.story = {
  parameters: {
    jest: ["experience.test.tsx"],
  },
};
