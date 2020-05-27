import { colors } from "@multei/tokens";
import { base } from "./base";

const variations = {
  palette: {
    background: {
      paper: colors.paperBackground,
    },
    type: "light",
  },
};

const light = {
  ...base,
  ...variations,
};

module.exports = { light };
