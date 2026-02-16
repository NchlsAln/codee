"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFramesTemplate = dataFramesTemplate;
function dataFramesTemplate() {
    return [
        "using DataFrames",
        "df = DataFrame(id = 1:3, value = [2, 4, 6])",
        "df2 = transform(df, :value => ByRow(x -> x * 2) => :double)",
        "println(df2)"
    ].join("\n");
}
