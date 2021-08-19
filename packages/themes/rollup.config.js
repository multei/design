import {base} from "../../rollup.base.config.js";
import pkg from "./package.json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const input = "src/index.ts";

export default base({
  cjs: {
    external: ["@multei/tokens"],
    input,
    output: {
      file: pkg.main,
    },
    plugins: [typescript()]
  },
  es: {
    external: ["@multei/tokens"],
    input,
    output: {
      file: pkg.module,
    },
    plugins: [typescript()]
  },
  umd: {
    input,
    plugins: [typescript(), nodeResolve(), commonjs()],
    output: {
      file: pkg.browser,
    },
  },
});
