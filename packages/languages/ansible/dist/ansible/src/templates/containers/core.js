"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containersTemplate = containersTemplate;
function containersTemplate() {
  return [
    "- name: Container platform",
    "  hosts: localhost",
    "  tasks:",
    "    - name: Build image",
    "      community.docker.docker_image:",
    "        name: app",
    "        source: build",
    "    - name: Kubernetes deployment",
    "      kubernetes.core.k8s:",
    "        state: present",
    "        definition:",
    "          apiVersion: apps/v1",
    "          kind: Deployment",
    "          metadata: { name: app }",
    "    - name: Helm release",
    "      kubernetes.core.helm:",
    "        name: app",
    "        chart_ref: bitnami/nginx",
    "    - name: ECS service",
    "      community.aws.ecs_service:",
    "        name: app",
    "        state: present",
  ].join("\n");
}
