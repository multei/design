import { color } from "@multei/tokens";
import { base } from "./base";

const variations = {
  palette: {
    background: {
      paper: color.background.default.value,
    },
    type: "light",
  },
};

const light = {
  ...base,
  ...variations,
};

module.exports = { light };
