"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkingTemplate = networkingTemplate;
function networkingTemplate() {
  return [
    'resource "aws_vpc" "main" { cidr_block = "10.0.0.0/16" }',
    'resource "aws_subnet" "public" { vpc_id = aws_vpc.main.id cidr_block = "10.0.1.0/24" }',
    'resource "aws_security_group" "web" { vpc_id = aws_vpc.main.id }',
    'resource "aws_lb" "app" { name = "app-lb" load_balancer_type = "application" }',
    'resource "aws_route53_record" "app" { zone_id = "Z123456" name = "app.example.com" type = "A" }',
  ].join("\n");
}
