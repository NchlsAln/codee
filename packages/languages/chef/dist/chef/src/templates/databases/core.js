"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databasesTemplate = databasesTemplate;
function databasesTemplate() {
  return [
    "aws_db_instance 'app-db' do",
    "  engine 'postgres'",
    "  instance_class 'db.t3.micro'",
    "end",
    "aws_dynamodb_table 'items' do",
    "  hash_key 'id'",
    "end",
    "google_sql_database_instance 'sql' do",
    "  database_version 'POSTGRES_15'",
    "end",
    "mongodb_atlas_cluster 'cluster' do",
    "  project_id 'demo'",
    "end",
    "aws_elasticache_cluster 'cache' do",
    "  engine 'redis'",
    "end",
  ].join("\n");
}
