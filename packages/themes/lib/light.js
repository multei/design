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

export const light = {
  ...base,
  ...variations,
};
