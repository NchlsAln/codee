"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataManipulationTemplate = dataManipulationTemplate;
function dataManipulationTemplate() {
    return [
        "using DataFrames, Statistics",
        "df = DataFrame(group=[\"a\",\"b\"], score=[10, 20])",
        "result = combine(groupby(df, :group), :score => mean => :avg)",
        "println(result)"
    ].join("\n");
}
