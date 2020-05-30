export const base = ({ cjs, es, umd }) => [
  {
    input: umd.input,
    output: {
      format: "umd",
      file: umd.output.file,
      name: "multeiThemes",
    },
    plugins: umd.plugins,
  },
  {
    external: cjs.external,
    input: cjs.input,
    output: {
      format: "cjs",
      file: cjs.output.file,
    },
  },
  {
    external: es.external,
    input: es.input,
    output: {
      format: "es",
      file: es.output.file,
    },
  },
];
