"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "(require '[next.jdbc :as jdbc])",
        "(def ds (jdbc/get-datasource {:dbtype \"postgres\" :dbname \"app\" :user \"user\" :password \"pass\"}))",
        "(jdbc/execute! ds [\"select 1\"])"
    ].join("\n");
}
