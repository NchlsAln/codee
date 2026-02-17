"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cicdPipelinesTemplate = cicdPipelinesTemplate;
function cicdPipelinesTemplate() {
  return [
    "# GitHub Actions (python.yml)",
    "# - uses: actions/setup-python@v5",
    "# - run: pip install -r requirements.txt",
    "# - run: pytest -q",
    "#",
    "# tox.ini and nox for multi-version testing",
    "# [tox] envlist = py311, py312",
  ].join("\n");
}
