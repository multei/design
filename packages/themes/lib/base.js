import { color, font } from "@multei/tokens";

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
          backgroundColor: color.background.code.value,
        },
        mark: {
          backgroundColor: color.background.mark.value,
          color: color.font.mark.value,
        },
      },
    },
  },
  palette: {
    background: {
      default: color.background.default.value,
      paper,
    },
    common: {
      black: color.base.black.opaque.value,
      white: color.base.white.value,
    },
    error: {
      main: color.background.error.value,
      contrastText: color.font.error.value,
    },
    info: {
      main: color.background.info.value,
      contrastText: color.font.info.value,
    },
    primary: {
      main: color.brand.primary.value,
      contrastText: color.font.primary.value,
    },
    secondary: {
      main: color.brand.secondary.value,
      contrastText: color.font.secondary.value,
    },
    success: {
      main: color.background.success.value,
      contrastText: color.font.success.value,
    },
    type,
    warning: {
      main: color.background.warning.value,
      contrastText: color.font.warning.value,
    },
  },
  typography: {
    fontFamily: font.family.base.value,
  },
});
