/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "dashboard"],
  testRunner: "jest",
  transpilers: ["babel"],
  coverageAnalysis: "off",
  babel: {
    optionsFile: ".babelrc",
  },
};
