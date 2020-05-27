import { colors } from "@multei/tokens";
import { base } from "./base";

const variations = {
  palette: {
    background: {
      paper: colors.paperBackgroundDark,
    },
    type: "dark",
  },
};

const dark = {
  ...base,
  ...variations,
};

module.exports = { dark };
