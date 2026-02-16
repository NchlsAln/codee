"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringTemplate = monitoringTemplate;
function monitoringTemplate() {
  return [
    "aws_cloudwatch_metric_alarm 'cpu-high' do",
    "  metric_name 'CPUUtilization'",
    "  threshold 80",
    "end",
    "datadog_monitor 'app-latency' do",
    "  query 'avg(last_5m):avg:app.latency{*} > 1'",
    "end",
    "newrelic_alert_policy 'app-policy' do",
    "  name 'app policy'",
    "end",
    "pagerduty_service 'app' do",
    "  name 'app'",
    "end",
    "slack_alert 'alarm' do",
    "  channel '#alerts'",
    "end",
  ].join("\n");
}
