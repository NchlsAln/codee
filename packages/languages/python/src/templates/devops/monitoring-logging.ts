export function monitoringLoggingTemplate(): string {
  return [
    "import structlog",
    "from prometheus_client import Counter",
    "",
    "log = structlog.get_logger()",
    "requests_total = Counter('requests_total', 'Total requests')",
    "",
    "def handler():",
    "    requests_total.inc()",
    "    log.info('request', status=200)",
  ].join("\n");
}
