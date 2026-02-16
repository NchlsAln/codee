"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databasesTemplate = databasesTemplate;
function databasesTemplate() {
  return [
    "- name: Databases",
    "  hosts: localhost",
    "  tasks:",
    "    - name: RDS",
    "      amazon.aws.rds_instance:",
    "        db_instance_identifier: app-db",
    "        db_instance_class: db.t3.micro",
    "        engine: postgres",
    "    - name: DynamoDB",
    "      amazon.aws.dynamodb_table:",
    "        name: items",
    "        hash_key_name: id",
    "    - name: Cloud SQL",
    "      google.cloud.gcp_sql_instance:",
    "        name: sql",
    "        region: us-central1",
    "    - name: MongoDB Atlas",
    "      community.mongodb.mongodb_atlas_cluster:",
    "        name: cluster",
    "    - name: Redis",
    "      community.aws.elasticache:",
    "        name: cache",
    "        engine: redis",
  ].join("\n");
}
