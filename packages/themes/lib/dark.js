import { color } from "@multei/tokens";
import { base } from "./base";

const variations = {
  palette: {
    background: {
      paper: color.background.paper.dark.value,
    },
    type: "dark",
  },
};

const dark = {
  ...base,
  ...variations,
};

module.exports = { dark };
