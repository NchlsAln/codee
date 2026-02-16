"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesTemplate = timeSeriesTemplate;
function timeSeriesTemplate() {
    return [
        "using TimeSeries",
        "ts = TimeArray(timestamps, values)",
        "println(ts)"
    ].join("\n");
}
