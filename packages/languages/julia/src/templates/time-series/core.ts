export function timeSeriesTemplate(): string {
  return [
    "using TimeSeries",
    "ts = TimeArray(timestamps, values)",
    "println(ts)"
  ].join("\n");
}
