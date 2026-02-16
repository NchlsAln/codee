export function monitoringTemplate(): string {
  return [
    'resource "aws_cloudwatch_log_group" "app" { name = "/app/logs" retention_in_days = 14 }',
    'resource "aws_cloudwatch_metric_alarm" "cpu" { alarm_name = "cpu-high" metric_name = "CPUUtilization" namespace = "AWS/EC2" statistic = "Average" period = 300 threshold = 80 }',
    'resource "datadog_monitor" "app" { name = "app latency" type = "metric alert" query = "avg(last_5m):avg:app.latency{*} > 1" }',
    'resource "newrelic_alert_policy" "app" { name = "app policy" }',
    'resource "pagerduty_service" "app" { name = "app" }',
  ].join("\n");
}
