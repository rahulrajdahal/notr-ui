import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json" with { type: "json" };

export default {
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
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
    terser(),
    (await import("rollup-plugin-delete")).default({
      targets: "dist/*",
      runOnce: true,
    }),
  ],
  external: ["react", "react-dom"],
};
