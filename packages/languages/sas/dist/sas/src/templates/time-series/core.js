"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesTemplate = timeSeriesTemplate;
function timeSeriesTemplate() {
    return [
        "proc arima data=work.series;",
        "  identify var=value;",
        "  estimate p=1 q=1;",
        "  forecast lead=12 out=work.fcst;",
        "run;"
    ].join("\n");
}
