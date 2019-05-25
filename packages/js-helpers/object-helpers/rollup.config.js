import { getRollupConfig } from '../../../config/rollup.config.base';

require("rimraf").sync("dist");

export default [
  { name: "object-helpers", format: "esm", minify: false },
  { name: "object-helpers", format: "esm", minify: true },
  { name: "object-helpers", format: "umd", minify: false },
  { name: "object-helpers", format: "umd", minify: true },
].map(getRollupConfig);