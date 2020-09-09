import { addParameters, setAddon, addDecorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import JSXAddon from "storybook-addon-jsx";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import results from "../.jest-test-results.json";
setAddon(JSXAddon);

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  viewport: {
    defaultViewport: INITIAL_VIEWPORTS,
  },
});
