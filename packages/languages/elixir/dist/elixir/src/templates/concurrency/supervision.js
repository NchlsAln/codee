"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisionTemplate = supervisionTemplate;
function supervisionTemplate() {
    return [
        "children = [Counter]",
        "Supervisor.start_link(children, strategy: :one_for_one)"
    ].join("\n");
}
