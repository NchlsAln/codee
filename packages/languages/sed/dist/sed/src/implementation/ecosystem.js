"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedEcosystem = void 0;
exports.sedEcosystem = {
    fileExtensions: [".sed"],
    paradigms: ["stream-editing", "line-oriented"],
    packageManagers: ["N/A"],
    buildTools: ["make"],
    testing: ["golden files", "diff"],
    linting: ["shellcheck (wrapper scripts)"],
    formatting: ["sed -n with readable scripts"],
    docs: ["man sed", "GNU sed manual"],
    ciCd: ["GitHub Actions", "GitLab CI"],
    deploymentTargets: ["CLI scripts", "log processing", "build pipelines"],
    runtimes: ["GNU sed", "BSD sed", "busybox sed"]
};
