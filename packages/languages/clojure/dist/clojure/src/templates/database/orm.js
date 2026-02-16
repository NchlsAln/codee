"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "(require '[next.jdbc :as jdbc])",
        "(def ds (jdbc/get-datasource {:dbtype \"postgres\" :dbname \"app\"}))",
        "(jdbc/execute! ds [\"select * from users limit 1\"])"
    ].join("\n");
}
