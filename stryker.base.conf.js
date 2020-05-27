/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "dashboard"],
  testRunner: "jest",
  transpilers: ["babel"],
  coverageAnalysis: "off",
  babel: {
    optionsFile: ".babelrc",
  },
};
