"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databasesTemplate = databasesTemplate;
function databasesTemplate() {
  return [
    "FROM debian:bookworm-slim",
    "RUN apt-get update && apt-get install -y postgresql-client redis-tools",
    "RUN curl -sL https://downloads.mongodb.com/compass/mongosh.deb -o mongosh.deb",
    "RUN dpkg -i mongosh.deb || apt-get -f install -y",
    'CMD ["/bin/sh", "-c", "psql --version"]',
  ].join("\n");
}
