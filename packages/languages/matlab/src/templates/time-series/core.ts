export function timeSeriesTemplate(): string {
  return [
    "model = arima(1,1,1);",
    "est = estimate(model, y);",
    "yhat = forecast(est, 12, 'Y0', y);"
  ].join("\n");
}
