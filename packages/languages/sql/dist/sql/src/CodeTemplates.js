"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const analytics_1 = require("./templates/data-analysis/analytics");
const chart_data_1 = require("./templates/visualization/chart-data");
const training_data_1 = require("./templates/ml/training-data");
const postgresql_1 = require("./templates/database/postgresql");
const mysql_1 = require("./templates/database/mysql");
const sqlite_1 = require("./templates/database/sqlite");
const migration_1 = require("./templates/database/migration");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("sql", {
            idioms: ["Keep queries readable.", "Prefer explicit joins."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "concurrency.transaction": (0, async_1.asyncTemplate)(),
                "data-analysis.analytics": (0, analytics_1.analyticsTemplate)(),
                "visualization.chart-data": (0, chart_data_1.chartDataTemplate)(),
                "ml.training-data": (0, training_data_1.trainingTemplate)(),
                "database.postgresql": (0, postgresql_1.postgresTemplate)(),
                "database.mysql": (0, mysql_1.mysqlTemplate)(),
                "database.sqlite": (0, sqlite_1.sqliteTemplate)(),
                "database.migration": (0, migration_1.migrationTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
