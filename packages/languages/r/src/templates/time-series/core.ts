export function timeSeriesTemplate(): string {
  return [
    "library(forecast)",
    "ts_data <- ts(values, frequency = 12)",
    "model <- auto.arima(ts_data)",
    "forecast(model, h = 12)"
  ].join("\n");
}
