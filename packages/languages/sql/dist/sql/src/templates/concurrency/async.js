"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "BEGIN;",
        "UPDATE accounts SET balance = balance - 10 WHERE id = 1;",
        "UPDATE accounts SET balance = balance + 10 WHERE id = 2;",
        "COMMIT;"
    ].join("\n");
}
