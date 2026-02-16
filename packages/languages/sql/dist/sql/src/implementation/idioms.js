"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlIdioms = void 0;
exports.sqlIdioms = [
    {
        name: "Declarative queries",
        description: "Describe what to return, not how to compute it."
    },
    {
        name: "Set operations",
        description: "Use UNION/INTERSECT/EXCEPT for set logic."
    },
    {
        name: "Joins",
        description: "Prefer explicit JOINs with clear predicates."
    },
    {
        name: "Window functions",
        description: "Use OVER() for analytics without collapsing rows."
    }
];
