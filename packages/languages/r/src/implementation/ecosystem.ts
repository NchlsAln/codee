export const rEcosystem = {
  fileExtensions: [".r", ".R", ".Rmd", ".qmd"],
  paradigms: ["functional", "procedural", "oop"],
  packageManagers: ["CRAN", "Bioconductor", "renv"],
  buildTools: ["R CMD build", "devtools"],
  testing: ["testthat"],
  integrationTesting: ["httptest2"],
  linting: ["lintr"],
  formatting: ["styler"],
  typeChecking: ["lintr", "checkmate"],
  docs: ["roxygen2", "pkgdown"],
  ciCd: ["GitHub Actions", "R-hub"],
  deploymentTargets: ["Shiny Server", "RStudio Connect", "Posit Cloud"],
  runtimes: ["R interpreter"],
  frameworks: ["tidyverse", "Shiny", "Bioconductor", "data.table"],
  packageIndex: "cran",
  observability: ["logger", "futile.logger"]
};
