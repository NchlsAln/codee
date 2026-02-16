export function timeSeriesTemplate(): string {
  return [
    "proc arima data=work.series;",
    "  identify var=value;",
    "  estimate p=1 q=1;",
    "  forecast lead=12 out=work.fcst;",
    "run;"
  ].join("\n");
}
