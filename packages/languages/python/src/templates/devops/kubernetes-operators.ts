export function kubernetesOperatorsTemplate(): string {
  return [
    "import kopf",
    "",
    "@kopf.on.create('example.com', 'v1', 'widgets')",
    "def create(spec, name, **_):",
    "    return {'message': f'created {name}', 'spec': spec}",
    "",
    "@kopf.on.delete('example.com', 'v1', 'widgets')",
    "def delete(name, **_):",
    "    print(f'deleted {name}')",
  ].join("\n");
}
