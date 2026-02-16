"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containersTemplate = containersTemplate;
function containersTemplate() {
  return [
    'resource "aws_ecs_cluster" "main" { name = "app" }',
    'resource "aws_ecs_task_definition" "app" { family = "app" cpu = "256" memory = "512" network_mode = "awsvpc" }',
    'resource "kubernetes_deployment" "app" { metadata { name = "app" } spec { replicas = 2 } }',
    'resource "helm_release" "app" { name = "app" repository = "https://charts.bitnami.com/bitnami" chart = "nginx" }',
  ].join("\n");
}
