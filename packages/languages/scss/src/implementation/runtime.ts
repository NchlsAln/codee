export const scssRuntime = {
  name: "Sass compiler",
  supportedVersions: ["Dart Sass 1.x"],
  processingModel: {
    compilation: "SCSS parsed and compiled to CSS",
    features: "Variables, nesting, mixins, functions, modules",
    sourcemaps: "Source maps map SCSS back to CSS"
  },
  performance: {
    notes: ["Limit deep nesting", "Prefer mixins for reuse", "Avoid large global imports"]
  },
  tooling: {
    compilers: ["dart-sass"],
    linting: ["stylelint"],
    build: ["sass", "webpack", "vite"]
  }
};
