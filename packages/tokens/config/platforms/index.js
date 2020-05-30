const buildPath = "./dist/";
const transformGroup = "js";

const platforms = {
  "assets/copy": {
    actions: ["copy_assets"],
    buildPath,
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
  "javascript/object": {
    buildPath,
    files: [
      {
        destination: "index.js",
        format: "javascript/object"
      }
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
  // "javascript/es6": {
  //   buildPath,
  //   files: [
  //     {
  //       destination: "index.esm.js",
  //       format: "javascript/es6",
  //     },
  //   ],
  //   transforms: ['name/cti/camel'],
  //   transformGroup,
  // },
  json: {
    buildPath,
    files: [
      {
        destination: "index.json",
        format: "json",
      },
    ],
    transformGroup,
  },
  "json/asset": {
    buildPath,
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
