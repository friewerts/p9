import { getRollupConfig } from '../../../config/rollup.config.base';

require("rimraf").sync("dist");

export default [
  { name: "dom-helpers", format: "esm", minify: false },
  { name: "dom-helpers", format: "esm", minify: true },
  { name: "dom-helpers", format: "umd", minify: false },
  { name: "dom-helpers", format: "umd", minify: true },
].map(getRollupConfig);