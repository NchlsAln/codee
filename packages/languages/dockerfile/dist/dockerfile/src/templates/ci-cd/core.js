"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cicdTemplate = cicdTemplate;
function cicdTemplate() {
  return [
    "FROM golang:1.22 AS build",
    "WORKDIR /src",
    "COPY . .",
    "RUN --mount=type=cache,target=/go/pkg/mod go build -o app ./cmd/app",
    "FROM gcr.io/distroless/base-debian12",
    "COPY --from=build /src/app /app",
    'ENTRYPOINT ["/app"]',
  ].join("\n");
}
