import { base } from "../../rollup.base.config.js";
import pkg from "./package.json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const input = "lib/index.js";

export default base({
  cjs: {
    external: ["@multei/tokens"],
    input,
    output: {
      file: pkg.main,
    },
  },
  es: {
    external: ["@multei/tokens"],
    input,
    output: {
      file: pkg.module,
    },
  },
  umd: {
    input,
    plugins: [nodeResolve(), commonjs()],
    output: {
      file: pkg.browser,
    },
  },
});
