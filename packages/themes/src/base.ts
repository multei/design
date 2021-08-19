import {
  colorBackgroundCode,
  colorBackgroundDefault,
  colorBackgroundError,
  colorBackgroundInfo,
  colorBackgroundMark,
  colorBackgroundSuccess,
  colorBackgroundWarning,
  colorBaseBlack,
  colorBaseWhite,
  colorBrandPrimary,
  colorBrandSecondary,
  colorFontError,
  colorFontInfo,
  colorFontMark,
  colorFontPrimary,
  colorFontSecondary,
  colorFontSuccess,
  colorFontWarning,
  fontFamilyBase,
} from "@multei/tokens";

export const base = ({
  palette: {
    background: { paper },
    type,
  },
}) => ({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        code: {
          backgroundColor: colorBackgroundCode,
        },
        mark: {
          backgroundColor: colorBackgroundMark,
          color: colorFontMark,
        },
      },
    },
  },
  palette: {
    background: {
      default: colorBackgroundDefault,
      paper,
    },
    common: {
      black: colorBaseBlack,
      white: colorBaseWhite,
    },
    error: {
      main: colorBackgroundError,
      contrastText: colorFontError,
    },
    info: {
      main: colorBackgroundInfo,
      contrastText: colorFontInfo,
    },
    primary: {
      main: colorBrandPrimary,
      contrastText: colorFontPrimary,
    },
    secondary: {
      main: colorBrandSecondary,
      contrastText: colorFontSecondary,
    },
    success: {
      main: colorBackgroundSuccess,
      contrastText: colorFontSuccess,
    },
    type,
    warning: {
      main: colorBackgroundWarning,
      contrastText: colorFontWarning,
    },
  },
  typography: {
    fontFamily: fontFamilyBase,
  },
});
