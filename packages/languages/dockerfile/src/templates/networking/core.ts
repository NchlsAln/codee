export function networkingTemplate(): string {
  return [
    "FROM alpine:3.19",
    "RUN apk add --no-cache curl",
    "EXPOSE 8080",
    "HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8080/health || exit 1",
    'CMD ["/bin/sh", "-c", "echo ready"]',
  ].join("\n");
}
