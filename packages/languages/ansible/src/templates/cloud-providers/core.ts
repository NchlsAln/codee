export function cloudProvidersTemplate(): string {
  return [
    "- name: Provision multi-cloud",
    "  hosts: localhost",
    "  connection: local",
    "  tasks:",
    "    - name: AWS EC2",
    "      amazon.aws.ec2_instance:",
    "        name: web",
    "        instance_type: t3.micro",
    "        image_id: ami-123456",
    "    - name: Azure VM",
    "      azure.azcollection.azure_rm_virtualmachine:",
    "        name: web-vm",
    "        vm_size: Standard_B1s",
    "        admin_username: azureuser",
    "    - name: GCP Compute",
    "      google.cloud.gcp_compute_instance:",
    "        name: web",
    "        machine_type: e2-micro",
  ].join("\n");
}
