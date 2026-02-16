/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join, dirname } = require("path");

const ROOT = process.cwd();

const renderTemplate = (fnName, lines) => {
  const body = lines.map((line) => `    ${JSON.stringify(line)}`).join(",\n");
  return [
    `export function ${fnName}(): string {`,
    "  return [",
    body,
    "  ].join(\"\\n\");",
    "}",
    ""
  ].join("\n");
};

const TEMPLATE_DATA = {
  r: {
    "data-manipulation/core.ts": {
      fn: "dataManipulationTemplate",
      lines: [
        "library(dplyr)",
        "result <- df %>%",
        "  filter(score > 80) %>%",
        "  group_by(group) %>%",
        "  summarise(avg = mean(score), .groups = 'drop')",
        "print(result)"
      ]
    },
    "visualization/core.ts": {
      fn: "visualizationTemplate",
      lines: [
        "library(ggplot2)",
        "ggplot(df, aes(x = x, y = y)) +",
        "  geom_point() +",
        "  geom_smooth(method = 'lm')"
      ]
    },
    "statistics/core.ts": {
      fn: "statisticsTemplate",
      lines: [
        "fit <- lm(y ~ x + z, data = df)",
        "summary(fit)",
        "t.test(df$x, df$y)"
      ]
    },
    "machine-learning/core.ts": {
      fn: "machineLearningTemplate",
      lines: [
        "library(caret)",
        "set.seed(42)",
        "model <- train(y ~ ., data = df, method = 'rf')",
        "print(model)"
      ]
    },
    "time-series/core.ts": {
      fn: "timeSeriesTemplate",
      lines: [
        "library(forecast)",
        "ts_data <- ts(values, frequency = 12)",
        "model <- auto.arima(ts_data)",
        "forecast(model, h = 12)"
      ]
    },
    "optimization/core.ts": {
      fn: "optimizationTemplate",
      lines: [
        "library(lpSolve)",
        "obj <- c(3, 2)",
        "mat <- matrix(c(2, 1, 1, 1), nrow = 2, byrow = TRUE)",
        "dir <- c('<=', '<=')",
        "rhs <- c(100, 80)",
        "lp('max', obj, mat, dir, rhs)"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "library(DBI)",
        "con <- dbConnect(RSQLite::SQLite(), 'app.db')",
        "dbWriteTable(con, 'users', df, overwrite = TRUE)",
        "dbGetQuery(con, 'select count(*) as n from users')",
        "dbDisconnect(con)"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "rmarkdown::render('report.Rmd')",
        "sessionInfo()"
      ]
    },
    "bioinformatics/core.ts": {
      fn: "bioinformaticsTemplate",
      lines: [
        "library(Biostrings)",
        "seq <- DNAString('ACGTACGT')",
        "alphabetFrequency(seq)"
      ]
    },
    "finance/core.ts": {
      fn: "financeTemplate",
      lines: [
        "library(quantmod)",
        "getSymbols('AAPL')",
        "returns <- dailyReturn(Cl(AAPL))",
        "plot(returns)"
      ]
    }
  },
  julia: {
    "data-manipulation/core.ts": {
      fn: "dataManipulationTemplate",
      lines: [
        "using DataFrames, Statistics",
        "df = DataFrame(group=[" + "\"a\"" + "," + "\"b\"" + "], score=[10, 20])",
        "result = combine(groupby(df, :group), :score => mean => :avg)",
        "println(result)"
      ]
    },
    "visualization/core.ts": {
      fn: "visualizationTemplate",
      lines: [
        "using Plots",
        "plot(x, y, seriestype=:scatter)",
        "plot!(x, yhat)"
      ]
    },
    "statistics/core.ts": {
      fn: "statisticsTemplate",
      lines: [
        "using Statistics, HypothesisTests",
        "mean(x)",
        "t = OneSampleTTest(x, 0.0)",
        "pvalue(t)"
      ]
    },
    "machine-learning/core.ts": {
      fn: "machineLearningTemplate",
      lines: [
        "using MLJ",
        "model = @load RandomForestClassifier",
        "mach = machine(model, X, y)",
        "fit!(mach)"
      ]
    },
    "time-series/core.ts": {
      fn: "timeSeriesTemplate",
      lines: [
        "using TimeSeries",
        "ts = TimeArray(timestamps, values)",
        "println(ts)"
      ]
    },
    "optimization/core.ts": {
      fn: "optimizationTemplate",
      lines: [
        "using JuMP, HiGHS",
        "model = Model(HiGHS.Optimizer)",
        "@variable(model, x >= 0)",
        "@objective(model, Min, x)",
        "optimize!(model)"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "using SQLite, DataFrames",
        "db = SQLite.DB(\"app.db\")",
        "df = DataFrame(SQLite.Query(db, \"select 1 as id\"))",
        "println(df)"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "using Weave",
        "weave(\"report.jmd\")"
      ]
    },
    "bioinformatics/core.ts": {
      fn: "bioinformaticsTemplate",
      lines: [
        "using BioSequences",
        "seq = dna\"ACGTACGT\"",
        "println(seq)"
      ]
    },
    "finance/core.ts": {
      fn: "financeTemplate",
      lines: [
        "using MarketData, Statistics",
        "prices = marketdata()[!, :AdjClose]",
        "rets = diff(log.(prices))",
        "println(mean(rets))"
      ]
    }
  },
  matlab: {
    "data-manipulation/core.ts": {
      fn: "dataManipulationTemplate",
      lines: [
        "tbl = table(group, score)",
        "summary = groupsummary(tbl, 'group', 'mean', 'score');",
        "disp(summary)"
      ]
    },
    "visualization/core.ts": {
      fn: "visualizationTemplate",
      lines: [
        "figure;",
        "scatter(x, y);",
        "xlabel('x'); ylabel('y');"
      ]
    },
    "statistics/core.ts": {
      fn: "statisticsTemplate",
      lines: [
        "mdl = fitlm(tbl, 'y ~ x + z');",
        "disp(mdl);",
        "[h,p] = ttest(x, y);"
      ]
    },
    "machine-learning/core.ts": {
      fn: "machineLearningTemplate",
      lines: [
        "Mdl = fitctree(X, y);",
        "pred = predict(Mdl, X);",
        "disp(pred(1:5))"
      ]
    },
    "time-series/core.ts": {
      fn: "timeSeriesTemplate",
      lines: [
        "model = arima(1,1,1);",
        "est = estimate(model, y);",
        "yhat = forecast(est, 12, 'Y0', y);"
      ]
    },
    "optimization/core.ts": {
      fn: "optimizationTemplate",
      lines: [
        "f = [3 2];",
        "A = [2 1; 1 1];",
        "b = [100; 80];",
        "x = linprog(f, A, b);",
        "disp(x)"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "conn = database('db', 'user', 'pass');",
        "data = fetch(conn, 'SELECT 1 AS id');",
        "close(conn);",
        "disp(data)"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "publish('report.m', 'pdf');"
      ]
    },
    "bioinformatics/core.ts": {
      fn: "bioinformaticsTemplate",
      lines: [
        "seq = fastaread('seqs.fasta');",
        "disp(seq(1).Sequence)"
      ]
    },
    "finance/core.ts": {
      fn: "financeTemplate",
      lines: [
        "rets = price2ret(prices);",
        "vol = std(rets);",
        "disp(vol)"
      ]
    }
  },
  sql: {
    "data-manipulation/core.ts": {
      fn: "dataManipulationTemplate",
      lines: [
        "SELECT group_id, AVG(score) AS avg_score",
        "FROM scores",
        "WHERE score > 80",
        "GROUP BY group_id;"
      ]
    },
    "visualization/core.ts": {
      fn: "visualizationTemplate",
      lines: [
        "SELECT date_trunc('month', created_at) AS month,",
        "       COUNT(*) AS signups",
        "FROM users",
        "GROUP BY 1",
        "ORDER BY 1;"
      ]
    },
    "statistics/core.ts": {
      fn: "statisticsTemplate",
      lines: [
        "SELECT AVG(amount) AS avg_amt,",
        "       STDDEV(amount) AS std_amt",
        "FROM payments;"
      ]
    },
    "machine-learning/core.ts": {
      fn: "machineLearningTemplate",
      lines: [
        "CREATE VIEW ml_features AS",
        "SELECT user_id,",
        "       COUNT(*) AS order_count,",
        "       SUM(amount) AS total_spend",
        "FROM orders",
        "GROUP BY user_id;"
      ]
    },
    "time-series/core.ts": {
      fn: "timeSeriesTemplate",
      lines: [
        "SELECT day,",
        "       SUM(value) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7",
        "FROM metrics;"
      ]
    },
    "optimization/core.ts": {
      fn: "optimizationTemplate",
      lines: [
        "EXPLAIN ANALYZE",
        "SELECT * FROM orders",
        "WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "CREATE TABLE IF NOT EXISTS users (",
        "  id INT PRIMARY KEY,",
        "  name TEXT",
        ");",
        "INSERT INTO users (id, name) VALUES (1, 'Ada');"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "CREATE VIEW monthly_revenue AS",
        "SELECT date_trunc('month', created_at) AS month,",
        "       SUM(amount) AS revenue",
        "FROM payments",
        "GROUP BY 1;"
      ]
    },
    "bioinformatics/core.ts": {
      fn: "bioinformaticsTemplate",
      lines: [
        "SELECT sample_id, gene, expression",
        "FROM gene_expression",
        "WHERE gene IN ('BRCA1', 'TP53');"
      ]
    },
    "finance/core.ts": {
      fn: "financeTemplate",
      lines: [
        "SELECT trade_date,",
        "       (price - LAG(price) OVER (ORDER BY trade_date)) / LAG(price) OVER (ORDER BY trade_date) AS return",
        "FROM prices;"
      ]
    }
  },
  sas: {
    "data-manipulation/core.ts": {
      fn: "dataManipulationTemplate",
      lines: [
        "data work.cleaned;",
        "  set work.raw;",
        "  if score > 80;",
        "  length group $20;",
        "run;",
        "proc sort data=work.cleaned; by group; run;"
      ]
    },
    "visualization/core.ts": {
      fn: "visualizationTemplate",
      lines: [
        "proc sgplot data=work.cleaned;",
        "  scatter x=x y=y;",
        "  reg x=x y=y;",
        "run;"
      ]
    },
    "statistics/core.ts": {
      fn: "statisticsTemplate",
      lines: [
        "proc reg data=work.cleaned;",
        "  model y = x z;",
        "run;",
        "proc ttest data=work.cleaned;",
        "  class group;",
        "  var score;",
        "run;"
      ]
    },
    "machine-learning/core.ts": {
      fn: "machineLearningTemplate",
      lines: [
        "proc hpsplit data=work.cleaned;",
        "  class group;",
        "  model group = x y z;",
        "run;"
      ]
    },
    "time-series/core.ts": {
      fn: "timeSeriesTemplate",
      lines: [
        "proc arima data=work.series;",
        "  identify var=value;",
        "  estimate p=1 q=1;",
        "  forecast lead=12 out=work.fcst;",
        "run;"
      ]
    },
    "optimization/core.ts": {
      fn: "optimizationTemplate",
      lines: [
        "proc optmodel;",
        "  var x >= 0;",
        "  minimize cost = x;",
        "  solve;",
        "quit;"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "libname sales odbc datasrc='db';",
        "proc sql;",
        "  select count(*) as n from sales.users;",
        "quit;"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "ods pdf file='report.pdf';",
        "proc report data=work.cleaned; run;",
        "ods pdf close;"
      ]
    },
    "bioinformatics/core.ts": {
      fn: "bioinformaticsTemplate",
      lines: [
        "proc fasta data=work.seqs out=work.fasta;",
        "run;"
      ]
    },
    "finance/core.ts": {
      fn: "financeTemplate",
      lines: [
        "proc sql;",
        "  select date, (price - lag(price)) / lag(price) as return",
        "  from work.prices;",
        "quit;"
      ]
    }
  }
};

const writeTemplates = (language, templates) => {
  const baseDir = join(ROOT, "packages", "languages", language, "src", "templates");
  Object.entries(templates).forEach(([relPath, spec]) => {
    const filePath = join(baseDir, relPath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, renderTemplate(spec.fn, spec.lines));
  });
};

Object.entries(TEMPLATE_DATA).forEach(([language, templates]) => {
  writeTemplates(language, templates);
});

console.log("Generated Batch 4 template files.");
