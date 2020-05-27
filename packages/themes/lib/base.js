"use strict";

const { colors, typography } = require("@multei/tokens");

const base = {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        code: {
          backgroundColor: colors.codeBackground,
        },
        mark: {
          backgroundColor: colors.markBackground,
          color: colors.markContrastText,
        },
      },
    },
  },
  palette: {
    background: {
      default: colors.brand,
    },
    common: colors.common,
    error: {
      main: colors.error,
      contrastText: colors.errorContrastText,
    },
    info: {
      main: colors.info,
      contrastText: colors.infoContrastText,
    },
    primary: {
      main: colors.brand,
      contrastText: colors.brandContrastText,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.secondaryContrastText,
    },
    success: {
      main: colors.success,
      contrastText: colors.successContrastText,
    },
    warning: {
      main: colors.warning,
      contrastText: colors.warningContrastText,
    },
  },
  typography: {
    fontFamily: typography.defaultFontFamily,
  },
};

module.exports = { base };
