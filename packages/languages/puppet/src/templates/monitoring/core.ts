export function monitoringTemplate(): string {
  return [
    "aws_cloudwatch_metric_alarm { 'cpu-high':",
    "  metric_name => 'CPUUtilization',",
    "  threshold   => 80,",
    "}",
    "datadog_monitor { 'app-latency':",
    "  query => 'avg(last_5m):avg:app.latency{*} > 1',",
    "}",
    "newrelic_alert_policy { 'app-policy':",
    "  name => 'app policy',",
    "}",
    "pagerduty_service { 'app':",
    "  name => 'app',",
    "}",
    "slack::alert { 'alarm':",
    "  channel => '#alerts',",
    "}",
  ].join("\n");
}
