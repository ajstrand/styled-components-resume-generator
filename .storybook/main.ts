module.exports = {
  stories: ["../src/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-jest",
    "@storybook/addon-actions",
    "storybook-addon-jsx",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/preset-typescript",
    "@storybook/addon-docs/preset",
  ],
};
