import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json" with { type: "json" };

export default [{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    postcss({
      modules: true,
      inject: true,
      minimize: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      declarationMap: false,
      exclude: ["**/*.stories.tsx",
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.stories.tsx',
        '**/__tests__/**',
        '**/__mocks__/**'],
    }),
    terser(),
    (await import("rollup-plugin-delete")).default({
      targets: "dist/*",
      runOnce: true,
    }),
  ],
  external: ["react", "react-dom"],
},
 {input:  'src/index.ts', output:[{file:packageJson.types,format:'es'}], plugins:[dts()]}
];
