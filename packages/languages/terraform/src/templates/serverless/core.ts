export function serverlessTemplate(): string {
  return [
    'resource "aws_lambda_function" "api" { function_name = "api" runtime = "nodejs18.x" handler = "index.handler" role = aws_iam_role.app.arn filename = "build.zip" }',
    'resource "aws_apigatewayv2_api" "http" { name = "http-api" protocol_type = "HTTP" }',
    'resource "aws_apigatewayv2_integration" "lambda" { api_id = aws_apigatewayv2_api.http.id integration_type = "AWS_PROXY" integration_uri = aws_lambda_function.api.arn }',
    'resource "aws_sfn_state_machine" "flow" { name = "flow" role_arn = aws_iam_role.app.arn definition = "{}" }',
    'resource "aws_cloudwatch_event_rule" "schedule" { name = "hourly" schedule_expression = "rate(1 hour)" }',
  ].join("\n");
}
