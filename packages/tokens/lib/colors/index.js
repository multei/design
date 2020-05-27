"use strict";

const { common } = require("./common");

const colors = {
  brand: common.purple,
  brandContrastText: common.white,
  common,
  codeBackground: common.transparentGray,
  error: common.red,
  errorContrastText: common.white,
  info: common.blue,
  infoContrastText: common.white,
  markBackground: common.yellow,
  markContrastText: common.black,
  paperBackground: common.white,
  paperBackgroundDark: common.transparentGray,
  secondary: common.blue,
  secondaryContrastText: common.white,
  success: common.green,
  successContrastText: common.transparentBlack,
  warning: common.orange,
  warningContrastText: common.transparentBlack,
};

module.exports = { colors };
