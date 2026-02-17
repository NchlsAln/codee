export const modernizationGuide = {
  overview: "Guide upgrades across Python versions and legacy codebases.",
  migrations: [
    "Python 2 to 3: bytes/str, print, iterators",
    "3.8 to 3.12: typing updates, match/case, exception groups",
    "Async adoption: sync to async boundaries",
  ],
  steps: [
    "Enable type checking in loose mode first",
    "Upgrade dependencies and lockfiles",
    "Introduce formatters and linters",
    "Adopt pyproject.toml tooling",
  ],
};
