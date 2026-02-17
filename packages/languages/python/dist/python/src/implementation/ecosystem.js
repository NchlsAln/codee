"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonEcosystem = void 0;
exports.pythonEcosystem = {
  packageManagers: ["pip", "poetry", "pdm", "pipenv", "conda", "uv"],
  buildTools: ["setuptools", "flit", "hatch", "maturin", "poetry build"],
  buildBackends: ["setuptools.build_meta", "flit_core", "hatchling", "maturin"],
  testing: ["pytest", "unittest", "nose2", "hypothesis", "pytest-benchmark"],
  integrationTesting: ["tox", "nox"],
  linting: ["ruff", "pylint", "flake8", "bandit"],
  formatting: ["black", "isort", "ruff format"],
  typeChecking: ["mypy", "pyright", "pytype", "beartype"],
  docs: ["Sphinx", "MkDocs", "pydoc", "pdoc", "type hints"],
  ciCd: ["GitHub Actions", "GitLab CI", "Azure Pipelines"],
  deploymentTargets: ["containers", "serverless", "data pipelines", "embedded"],
  packaging: ["wheels", "sdist", "pex"],
  observability: ["structlog", "opentelemetry"],
};
