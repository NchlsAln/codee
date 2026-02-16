export const dockerfileAstPatterns: Array<{ pattern: string; description: string }> = [
  { pattern: "^FROM", description: "Base image" },
  { pattern: "^RUN", description: "Layer build step" },
  { pattern: "^COPY|^ADD", description: "File copy" },
  { pattern: "^ARG", description: "Build argument" },
  { pattern: "^ENV", description: "Environment variable" },
  { pattern: "\\b--mount=type=cache\\b", description: "BuildKit cache mounts" },
  { pattern: "\\bsecret\\b", description: "Potential secret usage" },
  { pattern: "apt-get|yum|apk", description: "Package install" },
];
