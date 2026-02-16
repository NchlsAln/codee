export const sqlEcosystem = {
  fileExtensions: [".sql"],
  paradigms: ["declarative"],
  packageManagers: ["N/A"],
  buildTools: ["dbt"],
  testing: ["dbt test", "pgTAP"],
  integrationTesting: ["testcontainers", "dbt test"],
  linting: ["sqlfluff"],
  formatting: ["sqlfluff format"],
  typeChecking: ["engine validation"],
  docs: ["dbt docs"],
  ciCd: ["GitHub Actions", "dbt Cloud"],
  deploymentTargets: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  runtimes: ["database engines"],
  frameworks: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  packageIndex: "dialects",
  observability: ["pg_stat_statements", "slow query logs"]
};
