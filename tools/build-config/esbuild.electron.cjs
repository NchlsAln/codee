const esbuild = require("esbuild");
const path = require("path");

const isWatch = process.argv.includes("--watch");
const isProd = process.env.NODE_ENV === "production";

const repoRoot = path.resolve(__dirname, "..", "..");

const config = {
  entryPoints: [path.join(repoRoot, "apps", "codee-desktop", "src", "main.ts")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(repoRoot, "apps", "codee-desktop", "dist", "main.js"),
  sourcemap: true,
  minify: isProd,
  target: "node18",
  external: ["electron"],
  define: {
    "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development")
  }
};

if (isWatch) {
  esbuild.context(config).then((ctx) => ctx.watch());
} else {
  esbuild.build(config).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
