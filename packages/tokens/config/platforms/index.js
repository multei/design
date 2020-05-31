const buildPath = "./build/";
const distPath = "./dist/";
const transformGroup = "js";

const platforms = {
  "assets/copy": {
    actions: ["copy_assets"],
    buildPath: distPath,
    transformGroup: "assets",
  },
  "javascript/es6": {
    buildPath,
    files: [{
      destination: "index.js",
      format: "javascript/es6",
    },],
    transforms: ['name/cti/camel'],
    transformGroup
  },
  json: {
    buildPath: distPath,
    files: [
      {
        destination: "index.json",
        format: "json",
      },
    ],
    transformGroup,
  },
  "json/asset": {
    buildPath: distPath,
    files: [
      {
        destination: "assets/index.json",
        format: "json/asset",
      },
    ],
    transformGroup: "web",
  },
};

module.exports = platforms;
