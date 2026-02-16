export function databasesTemplate(): string {
  return [
    'resource "aws_db_instance" "main" { identifier = "app-db" engine = "postgres" instance_class = "db.t3.micro" allocated_storage = 20 }',
    'resource "aws_dynamodb_table" "items" { name = "items" hash_key = "id" billing_mode = "PAY_PER_REQUEST" }',
    'resource "google_sql_database_instance" "primary" { name = "sql" database_version = "POSTGRES_15" region = "us-central1" }',
    'resource "mongodbatlas_cluster" "main" { name = "cluster" project_id = "demo" provider_name = "AWS" }',
    'resource "aws_elasticache_cluster" "cache" { cluster_id = "cache" engine = "redis" node_type = "cache.t3.micro" num_cache_nodes = 1 }',
  ].join("\n");
}
