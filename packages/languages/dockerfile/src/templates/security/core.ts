export function securityTemplate(): string {
  return [
    "FROM alpine:3.19",
    "RUN addgroup -S app && adduser -S app -G app",
    "USER app",
    "WORKDIR /home/app",
    "ENV NODE_ENV=production",
    'CMD ["/bin/sh", "-c", "echo secure"]',
  ].join("\n");
}
