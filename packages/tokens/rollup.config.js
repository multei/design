import { base } from "../../rollup.base.config.js";
import pkg from "./package.json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default base({
  cjs: {
    external: ["@multei/tokens"],
    input: "build/index.cjs.js",
    output: {
      file: pkg.main,
    },
  },
  es: {
    external: ["@multei/tokens"],
    input: "build/index.cjs.js",
    output: {
      file: pkg.module,
    },
  },
  umd: {
    input: "build/index.umd.js",
    plugins: [nodeResolve(), commonjs()],
    output: {
      file: pkg.browser,
    },
  },
});
