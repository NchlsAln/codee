"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "-module(db_orm).",
        "-export([user/1]).",
        "user(Id) ->",
        "  #{id => Id, email => <<\"user@example.com\">>} ."
    ].join("\n");
}
