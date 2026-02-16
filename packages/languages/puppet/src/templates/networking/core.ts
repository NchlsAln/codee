export function networkingTemplate(): string {
  return [
    "aws_vpc { 'main':",
    "  cidr_block => '10.0.0.0/16',",
    "}",
    "aws_subnet { 'public':",
    "  cidr_block => '10.0.1.0/24',",
    "}",
    "aws_security_group { 'web':",
    "  description => 'web sg',",
    "}",
    "aws_load_balancer { 'app':",
    "  name => 'app-lb',",
    "}",
    "aws_route53_record { 'app':",
    "  zone => 'example.com',",
    "  type => 'A',",
    "  value => '1.2.3.4',",
    "}",
  ].join("\n");
}
