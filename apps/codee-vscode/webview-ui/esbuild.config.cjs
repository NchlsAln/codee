/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild");

const isWatch = process.argv.includes("--watch");

const config = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outdir: "dist",
  platform: "browser",
  format: "iife",
  sourcemap: true,
  loader: {
    ".css": "css"
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(isWatch ? "development" : "production")
  }
};

if (isWatch) {
  esbuild
    .context(config)
    .then((ctx) => ctx.watch())
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
} else {
  esbuild.build(config).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
