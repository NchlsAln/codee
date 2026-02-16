"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizationTemplate = optimizationTemplate;
function optimizationTemplate() {
    return [
        "using JuMP, HiGHS",
        "model = Model(HiGHS.Optimizer)",
        "@variable(model, x >= 0)",
        "@objective(model, Min, x)",
        "optimize!(model)"
    ].join("\n");
}
