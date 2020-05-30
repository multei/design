const buildPath = "./build/";
const distPath = "./dist/";
const transformGroup = "js";

const platforms = {
  "assets/copy": {
    actions: ["copy_assets"],
    buildPath: distPath,
    transformGroup: "assets",
  },
  "javascript/module": {
    buildPath,
    files: [
      {
        destination: "index.cjs.js",
        format: "javascript/module",
      },
    ],
    transformGroup,
  },
  "javascript/umd": {
    buildPath,
    files: [
      {
        destination: "index.umd.js",
        format: "javascript/umd",
      },
    ],
    transforms: ['name/cti/camel'],
    transformGroup,
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
