"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkEcosystem = void 0;
exports.awkEcosystem = {
    fileExtensions: [".awk", ".gawk"],
    paradigms: ["procedural", "pattern-action"],
    packageManagers: ["N/A"],
    buildTools: ["make"],
    testing: ["golden files", "diff"],
    linting: ["gawk --lint"],
    formatting: ["gawk --pretty-print"],
    docs: ["man awk", "gawk manual"],
    ciCd: ["GitHub Actions", "GitLab CI"],
    deploymentTargets: ["CLI scripts", "ETL pipelines", "log processing"],
    runtimes: ["gawk", "mawk", "nawk"]
};
