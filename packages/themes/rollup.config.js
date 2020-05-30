import { base } from "../../rollup.base.config.js";
import pkg from "./package.json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default base({
  cjs: {
    output: {
      file: pkg.main,
    },
  },
  es: {
    output: {
      file: pkg.module,
    },
  },
  external: ["@multei/tokens"],
  input: "lib/index.js",
  umd: {
    plugins: [nodeResolve(), commonjs()],
    output: {
      file: pkg.browser,
    },
  },
});
