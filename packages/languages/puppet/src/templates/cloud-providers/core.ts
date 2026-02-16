export function cloudProvidersTemplate(): string {
  return [
    "aws_ec2_instance { 'web':",
    "  instance_type => 't3.micro',",
    "  image_id      => 'ami-123456',",
    "}",
    "azure_vm { 'web-vm':",
    "  size => 'Standard_B1s',",
    "}",
    "gcp_compute_instance { 'web':",
    "  machine_type => 'e2-micro',",
    "}",
  ].join("\n");
}
