export function monitoringTemplate(): string {
  return [
    "FROM alpine:3.19",
    "ENV DD_AGENT_HOST=datadog",
    "ENV NEW_RELIC_APP_NAME=app",
    "RUN apk add --no-cache curl",
    'CMD ["/bin/sh", "-c", "echo monitoring"]',
  ].join("\n");
}
