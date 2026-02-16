export function cloudProvidersTemplate(): string {
  return [
    "FROM debian:bookworm-slim",
    "RUN apt-get update && apt-get install -y curl unzip",
    "RUN curl -sL https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip && unzip awscliv2.zip",
    "RUN ./aws/install",
    "RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash",
    "RUN curl -sL https://sdk.cloud.google.com | bash",
  ].join("\n");
}
