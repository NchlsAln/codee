"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverlessTemplate = serverlessTemplate;
function serverlessTemplate() {
  return [
    "aws_lambda_function 'api' do",
    "  runtime 'nodejs18.x'",
    "  handler 'index.handler'",
    "end",
    "aws_apigatewayv2_api 'http-api' do",
    "  protocol_type 'HTTP'",
    "end",
    "aws_sfn_state_machine 'flow' do",
    "  definition '{}'",
    "end",
    "aws_cloudwatch_event_rule 'hourly' do",
    "  schedule_expression 'rate(1 hour)'",
    "end",
  ].join("\n");
}
