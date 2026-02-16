"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mlTemplate = mlTemplate;
function mlTemplate() {
    return [
        "load fisheriris",
        "mdl = fitctree(meas, species);",
        "view(mdl, 'Mode', 'graph');"
    ].join("\n");
}
