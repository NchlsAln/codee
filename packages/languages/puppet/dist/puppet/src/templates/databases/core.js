"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databasesTemplate = databasesTemplate;
function databasesTemplate() {
  return [
    "aws_db_instance { 'app-db':",
    "  engine => 'postgres',",
    "  instance_class => 'db.t3.micro',",
    "}",
    "aws_dynamodb_table { 'items':",
    "  hash_key => 'id',",
    "}",
    "google_sql_database_instance { 'sql':",
    "  database_version => 'POSTGRES_15',",
    "}",
    "mongodb_atlas_cluster { 'cluster':",
    "  project_id => 'demo',",
    "}",
    "aws_elasticache_cluster { 'cache':",
    "  engine => 'redis',",
    "}",
  ].join("\n");
}
