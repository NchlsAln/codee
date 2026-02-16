"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return [
        "(require '[next.jdbc :as jdbc])",
        "(def ds (jdbc/get-datasource {:dbtype \"postgres\" :dbname \"app\"}))",
        "(jdbc/execute! ds [\"select id from users where email = ?\" \"a@b.com\"])"
    ].join("\n");
}
