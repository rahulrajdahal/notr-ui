import {
  commonjs,
  dts,
  nodeResolve,
  peerDepsExternal,
  pluginDelete,
  postCss,
  terser,
  typescriptConfig,
} from "@rahulrajdahal/notr-rollup-plugins";
import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        preserveModulesRoot: "src",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        preserveModulesRoot: "src",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescriptConfig(),
      postCss(),
      terser(),
      await pluginDelete(),
    ],
    external: ["react", "react-dom", '@meistericons/react'],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts()],
  },
];
