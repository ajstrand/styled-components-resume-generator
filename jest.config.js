module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jsx|js)?$": "babel-jest"
  },
  setupFiles: ["<rootDir>/.jest/register-context.js"]
};
