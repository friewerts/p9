import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export function getRollupConfig({ format, minify, name }) {
  const dir = `dist/${format}/`;
  const minifierSuffix = minify ? ".min" : "";
  const ext = format === "esm" ? "mjs" : "js";
  return {
    input: `./src/${name}.ts`,
    output: {
      name: `@p9/${name}`,
      file: `${dir}/${name}${minifierSuffix}.${ext}`,
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