"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesTemplate = timeSeriesTemplate;
function timeSeriesTemplate() {
    return [
        "library(forecast)",
        "ts_data <- ts(values, frequency = 12)",
        "model <- auto.arima(ts_data)",
        "forecast(model, h = 12)"
    ].join("\n");
}
