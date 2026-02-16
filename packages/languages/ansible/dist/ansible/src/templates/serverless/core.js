"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverlessTemplate = serverlessTemplate;
function serverlessTemplate() {
  return [
    "- name: Serverless",
    "  hosts: localhost",
    "  tasks:",
    "    - name: Lambda",
    "      amazon.aws.lambda:",
    "        name: api",
    "        runtime: python3.11",
    "        handler: index.handler",
    "    - name: API Gateway",
    "      amazon.aws.apigateway:",
    "        name: http-api",
    "        state: present",
    "    - name: Step Functions",
    "      amazon.aws.stepfunctions_state_machine:",
    "        name: flow",
    "    - name: EventBridge rule",
    "      amazon.aws.cloudwatchevent_rule:",
    "        name: hourly",
    "        schedule_expression: rate(1 hour)",
  ].join("\n");
}
