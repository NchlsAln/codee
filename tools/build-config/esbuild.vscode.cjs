const esbuild = require("esbuild");
const path = require("path");

const isWatch = process.argv.includes("--watch");
const isProd = process.env.NODE_ENV === "production";

const repoRoot = path.resolve(__dirname, "..", "..");

const nativeNodeModulesPlugin = {
  name: "native-node-modules",
  setup(build) {
    build.onResolve({ filter: /\.node$/ }, (args) => ({
      path: args.path,
      external: true
    }));
  }
};

const config = {
  entryPoints: [path.join(repoRoot, "apps", "codee-vscode", "src", "extension.ts")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(repoRoot, "apps", "codee-vscode", "dist", "extension.js"),
  sourcemap: true,
  minify: isProd,
  target: "node20",
  external: [
    "vscode",
    "electron",
    "keytar",
    "better-sqlite3",
    "@journeyapps/sqlcipher",
    "sqlite3",
    "@mapbox/node-pre-gyp",
    "node-pre-gyp",
    "mock-aws-s3",
    "aws-sdk",
    "nock"
  ],
  loader: {
    ".node": "file",
    ".html": "text"
  },
  plugins: [nativeNodeModulesPlugin],
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
