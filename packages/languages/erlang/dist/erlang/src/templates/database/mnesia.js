"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mnesiaTemplate = mnesiaTemplate;
function mnesiaTemplate() {
    return [
        "mnesia:create_schema([node()]).",
        "mnesia:start().",
        "mnesia:create_table(user, [{attributes, record_info(fields, user)}])."
    ].join("\n");
}
