export const bashEcosystem = {
  fileExtensions: [".sh", ".bash", ".bashrc", ".bash_profile"],
  paradigms: ["procedural", "command-oriented"],
  packageManagers: ["apt", "dnf", "apk", "pacman", "brew"],
  buildTools: ["make", "cmake", "autoconf"],
  testing: ["bats", "shellspec", "shunit2"],
  linting: ["shellcheck"],
  formatting: ["shfmt"],
  debugging: ["bashdb", "set -x", "PS4 tracing"],
  docs: ["man", "help", "info"],
  ciCd: ["GitHub Actions", "GitLab CI", "Jenkins"],
  deploymentTargets: ["servers", "containers", "CI runners", "embedded"],
  packaging: ["tar", "deb", "rpm"]
};
