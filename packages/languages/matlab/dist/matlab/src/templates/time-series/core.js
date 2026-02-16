"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesTemplate = timeSeriesTemplate;
function timeSeriesTemplate() {
    return [
        "model = arima(1,1,1);",
        "est = estimate(model, y);",
        "yhat = forecast(est, 12, 'Y0', y);"
    ].join("\n");
}
