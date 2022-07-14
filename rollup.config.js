import {terser} from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

const commonOutputOptions = {
  dir: "dist",
  format: "cjs",
  preserveModules: true,
  preserveModulesRoot: "src"
};

function getOutputOptions(options) {
  return {
    ...commonOutputOptions,
    ...options,
  };
}

function withSourceMapOutputOptions(options) {
  return {
    ...options,
    sourcemap: true,
  };
}

function getCJSOutputOptions(options) {
  return {
    ...getOutputOptions(options),
    format: "cjs",
    exports: "named",
  };
}

function getESMOutputOptions(options) {
  return {
    ...getOutputOptions(options),
    format: "esm",
  };
}

export default {
  input: [
    "src/index.ts",
  ],
  output: [
    // ESM
    getESMOutputOptions(
      withSourceMapOutputOptions({
        entryFileNames: "[name].esm.js",
      })
    ),
    // Default CJS
    getCJSOutputOptions(
      withSourceMapOutputOptions({})
    ),
    // Minified CJS
    getCJSOutputOptions({
      entryFileNames: "[name].min.js",
      plugins: [
        terser(),
      ],
    }),
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
  ],
  external: Object.keys(pkg.devDependencies),
};
