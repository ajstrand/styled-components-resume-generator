import { addParameters, setAddon, addDecorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import results from "../.jest-test-results.json";
addDecorator(withKnobs);
setAddon(JSXAddon);

addDecorator(
  withTests({
    results
  })
);

addParameters({
  viewport: {
    defaultViewport: INITIAL_VIEWPORTS
  }
});
