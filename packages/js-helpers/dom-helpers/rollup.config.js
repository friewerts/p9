import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

function config({ format, minify, input }) {
  const dir = `dist/${format}/`;
  const minifierSuffix = minify ? ".min" : "";
  const ext = format === "esm" ? "mjs" : "js";
  return {
    input: `./src/${input}.ts`,
    output: {
      name: '@p9/dom-helpers',
      file: `${dir}/${input}${minifierSuffix}.${ext}`,
      format,
      sourcemap: true
    },
    plugins: [
      typescript({
        clean: true,
        typescript: require("typescript"),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
          },
        }
      }),
      minify
        ? terser({
            sourcemap: true,
            compress: true,
            mangle: true
          })
        : undefined
    ].filter(Boolean)
  };
}

require("rimraf").sync("dist");

export default [
  { input: "dom-helpers", format: "esm", minify: false },
  { input: "dom-helpers", format: "esm", minify: true },
  { input: "dom-helpers", format: "umd", minify: false },
  { input: "dom-helpers", format: "umd", minify: true },
].map(config);