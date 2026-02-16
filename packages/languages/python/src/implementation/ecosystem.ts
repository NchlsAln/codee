export const pythonEcosystem = {
  packageManagers: ["pip", "conda", "poetry", "pipenv", "uv"],
  buildTools: ["setuptools", "hatch", "poetry build", "maturin"],
  testing: ["pytest", "unittest", "nose2", "hypothesis"],
  integrationTesting: ["tox", "nox"],
  linting: ["ruff", "flake8", "pylint"],
  formatting: ["black", "isort", "ruff format"],
  typeChecking: ["mypy", "pyright"],
  docs: ["Sphinx", "MkDocs", "pdoc"],
  ciCd: ["GitHub Actions", "GitLab CI", "Azure Pipelines"],
  deploymentTargets: ["containers", "serverless", "data pipelines", "embedded"],
  packaging: ["wheels", "sdist", "pex"],
  observability: ["structlog", "opentelemetry"]
};
