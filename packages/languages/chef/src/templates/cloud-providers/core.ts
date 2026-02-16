export function cloudProvidersTemplate(): string {
  return [
    "aws_ec2_instance 'web' do",
    "  instance_type 't3.micro'",
    "  image_id 'ami-123456'",
    "end",
    "azure_vm 'web-vm' do",
    "  size 'Standard_B1s'",
    "end",
    "gcp_compute_instance 'web' do",
    "  machine_type 'e2-micro'",
    "end",
  ].join("\n");
}
