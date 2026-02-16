export function networkingTemplate(): string {
  return [
    "aws_vpc 'main' do",
    "  cidr_block '10.0.0.0/16'",
    "end",
    "aws_subnet 'public' do",
    "  cidr_block '10.0.1.0/24'",
    "end",
    "aws_security_group 'web' do",
    "  description 'web sg'",
    "end",
    "aws_load_balancer 'app' do",
    "  name 'app-lb'",
    "end",
    "aws_route53_record 'app' do",
    "  zone 'example.com'",
    "  type 'A'",
    "  value '1.2.3.4'",
    "end",
  ].join("\n");
}
