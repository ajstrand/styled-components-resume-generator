import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import testResumeData from "../components/testResumeData";
import ExperienceSection from "../components/ExperienceSection";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: ExperienceSection,
  title: "Header",
  decorators: [withKnobs, jsxDecorator, withA11y]
};

export const Default = (): JSX.Element => (
  <ExperienceSection config={testResumeData.experience} />
);

Default.story = {
  parameters: {
    jest: ["experience.test.tsx"]
  }
};
