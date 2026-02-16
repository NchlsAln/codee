export function serverlessTemplate(): string {
  return [
    "aws_lambda_function { 'api':",
    "  runtime => 'nodejs18.x',",
    "  handler => 'index.handler',",
    "}",
    "aws_apigatewayv2_api { 'http-api':",
    "  protocol_type => 'HTTP',",
    "}",
    "aws_sfn_state_machine { 'flow':",
    "  definition => '{}',",
    "}",
    "aws_cloudwatch_event_rule { 'hourly':",
    "  schedule_expression => 'rate(1 hour)',",
    "}",
  ].join("\n");
}
