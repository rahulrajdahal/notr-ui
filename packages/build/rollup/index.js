import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const postCss = (options) =>
  postcss({
    modules: true,
    inject: true,
    minimize: true,
    ...options,
  });

const typescriptConfig = (options) =>
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: false,
    declarationMap: false,
    exclude: [
      "**/*.stories.tsx",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.stories.tsx",
      "**/__tests__/**",
      "**/__mocks__/**",
    ],
    ...options,
  });

const pluginDelete = async (options) =>
  (await import("rollup-plugin-delete")).default({
    targets: "dist/*",
    runOnce: true,
    ...options,
  });

export {
  commonjs,
  dts,
  nodeResolve,
  peerDepsExternal,
  pluginDelete,
  postCss,
  terser,
  typescriptConfig,
};
