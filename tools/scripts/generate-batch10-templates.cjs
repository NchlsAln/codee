/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join, dirname } = require("path");

const ROOT = process.cwd();

const renderTemplate = (fnName, lines) => {
  const body = lines.map((line) => `    ${JSON.stringify(line)}`).join(",\n");
  return [
    `export function ${fnName}(): string {`,
    "  return [",
    body,
    "  ].join(\"\\n\");",
    "}",
    ""
  ].join("\n");
};

const TEMPLATE_DATA = {
  terraform: {
    "cloud-providers/core.ts": {
      fn: "cloudProvidersTemplate",
      lines: [
        "provider \"aws\" { region = \"us-east-1\" }",
        "resource \"aws_instance\" \"web\" { ami = \"ami-123456\" instance_type = \"t3.micro\" }",
        "provider \"azurerm\" { features {} }",
        "resource \"azurerm_linux_virtual_machine\" \"vm\" { name = \"web-vm\" size = \"Standard_B1s\" admin_username = \"azureuser\" }",
        "provider \"google\" { project = \"demo\" region = \"us-central1\" }",
        "resource \"google_compute_instance\" \"vm\" { name = \"web\" machine_type = \"e2-micro\" zone = \"us-central1-a\" }"
      ]
    },
    "containers/core.ts": {
      fn: "containersTemplate",
      lines: [
        "resource \"aws_ecs_cluster\" \"main\" { name = \"app\" }",
        "resource \"aws_ecs_task_definition\" \"app\" { family = \"app\" cpu = \"256\" memory = \"512\" network_mode = \"awsvpc\" }",
        "resource \"kubernetes_deployment\" \"app\" { metadata { name = \"app\" } spec { replicas = 2 } }",
        "resource \"helm_release\" \"app\" { name = \"app\" repository = \"https://charts.bitnami.com/bitnami\" chart = \"nginx\" }"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "resource \"aws_vpc\" \"main\" { cidr_block = \"10.0.0.0/16\" }",
        "resource \"aws_subnet\" \"public\" { vpc_id = aws_vpc.main.id cidr_block = \"10.0.1.0/24\" }",
        "resource \"aws_security_group\" \"web\" { vpc_id = aws_vpc.main.id }",
        "resource \"aws_lb\" \"app\" { name = \"app-lb\" load_balancer_type = \"application\" }",
        "resource \"aws_route53_record\" \"app\" { zone_id = \"Z123456\" name = \"app.example.com\" type = \"A\" }"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "data \"aws_iam_policy_document\" \"assume\" { statement { actions = [\"sts:AssumeRole\"] principals { type = \"Service\" identifiers = [\"ec2.amazonaws.com\"] } } }",
        "resource \"aws_iam_role\" \"app\" { name = \"app-role\" assume_role_policy = data.aws_iam_policy_document.assume.json }",
        "resource \"aws_iam_policy\" \"app\" { name = \"app-policy\" policy = \"{}\" }",
        "resource \"aws_kms_key\" \"app\" { description = \"app key\" }",
        "resource \"aws_secretsmanager_secret\" \"db\" { name = \"db-password\" }"
      ]
    },
    "databases/core.ts": {
      fn: "databasesTemplate",
      lines: [
        "resource \"aws_db_instance\" \"main\" { identifier = \"app-db\" engine = \"postgres\" instance_class = \"db.t3.micro\" allocated_storage = 20 }",
        "resource \"aws_dynamodb_table\" \"items\" { name = \"items\" hash_key = \"id\" billing_mode = \"PAY_PER_REQUEST\" }",
        "resource \"google_sql_database_instance\" \"primary\" { name = \"sql\" database_version = \"POSTGRES_15\" region = \"us-central1\" }",
        "resource \"mongodbatlas_cluster\" \"main\" { name = \"cluster\" project_id = \"demo\" provider_name = \"AWS\" }",
        "resource \"aws_elasticache_cluster\" \"cache\" { cluster_id = \"cache\" engine = \"redis\" node_type = \"cache.t3.micro\" num_cache_nodes = 1 }"
      ]
    },
    "monitoring/core.ts": {
      fn: "monitoringTemplate",
      lines: [
        "resource \"aws_cloudwatch_log_group\" \"app\" { name = \"/app/logs\" retention_in_days = 14 }",
        "resource \"aws_cloudwatch_metric_alarm\" \"cpu\" { alarm_name = \"cpu-high\" metric_name = \"CPUUtilization\" namespace = \"AWS/EC2\" statistic = \"Average\" period = 300 threshold = 80 }",
        "resource \"datadog_monitor\" \"app\" { name = \"app latency\" type = \"metric alert\" query = \"avg(last_5m):avg:app.latency{*} > 1\" }",
        "resource \"newrelic_alert_policy\" \"app\" { name = \"app policy\" }",
        "resource \"pagerduty_service\" \"app\" { name = \"app\" }"
      ]
    },
    "ci-cd/core.ts": {
      fn: "cicdTemplate",
      lines: [
        "resource \"aws_codepipeline\" \"app\" { name = \"app-pipeline\" role_arn = aws_iam_role.app.arn }",
        "resource \"aws_codebuild_project\" \"app\" { name = \"app-build\" service_role = aws_iam_role.app.arn }",
        "resource \"aws_codedeploy_app\" \"app\" { name = \"app\" compute_platform = \"Server\" }",
        "resource \"aws_codedeploy_deployment_group\" \"app\" { app_name = aws_codedeploy_app.app.name deployment_group_name = \"app\" }",
        "resource \"argocd_application\" \"app\" { metadata { name = \"app\" } spec { destination { namespace = \"default\" } } }"
      ]
    },
    "serverless/core.ts": {
      fn: "serverlessTemplate",
      lines: [
        "resource \"aws_lambda_function\" \"api\" { function_name = \"api\" runtime = \"nodejs18.x\" handler = \"index.handler\" role = aws_iam_role.app.arn filename = \"build.zip\" }",
        "resource \"aws_apigatewayv2_api\" \"http\" { name = \"http-api\" protocol_type = \"HTTP\" }",
        "resource \"aws_apigatewayv2_integration\" \"lambda\" { api_id = aws_apigatewayv2_api.http.id integration_type = \"AWS_PROXY\" integration_uri = aws_lambda_function.api.arn }",
        "resource \"aws_sfn_state_machine\" \"flow\" { name = \"flow\" role_arn = aws_iam_role.app.arn definition = \"{}\" }",
        "resource \"aws_cloudwatch_event_rule\" \"schedule\" { name = \"hourly\" schedule_expression = \"rate(1 hour)\" }"
      ]
    }
  },
  ansible: {
    "cloud-providers/core.ts": {
      fn: "cloudProvidersTemplate",
      lines: [
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
        "        machine_type: e2-micro"
      ]
    },
    "containers/core.ts": {
      fn: "containersTemplate",
      lines: [
        "- name: Container platform",
        "  hosts: localhost",
        "  tasks:",
        "    - name: Build image",
        "      community.docker.docker_image:",
        "        name: app",
        "        source: build",
        "    - name: Kubernetes deployment",
        "      kubernetes.core.k8s:",
        "        state: present",
        "        definition:",
        "          apiVersion: apps/v1",
        "          kind: Deployment",
        "          metadata: { name: app }",
        "    - name: Helm release",
        "      kubernetes.core.helm:",
        "        name: app",
        "        chart_ref: bitnami/nginx",
        "    - name: ECS service",
        "      community.aws.ecs_service:",
        "        name: app",
        "        state: present"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "- name: Networking",
        "  hosts: localhost",
        "  tasks:",
        "    - name: VPC",
        "      amazon.aws.ec2_vpc_net:",
        "        name: main",
        "        cidr_block: 10.0.0.0/16",
        "    - name: Subnet",
        "      amazon.aws.ec2_vpc_subnet:",
        "        vpc_id: vpc-123",
        "        cidr: 10.0.1.0/24",
        "    - name: Security group",
        "      amazon.aws.ec2_group:",
        "        name: web",
        "        description: web sg",
        "    - name: Load balancer",
        "      amazon.aws.elb_application_lb:",
        "        name: app",
        "        state: present",
        "    - name: Route53 record",
        "      amazon.aws.route53:",
        "        zone: example.com",
        "        record: app.example.com",
        "        type: A",
        "        value: 1.2.3.4"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "- name: Security",
        "  hosts: localhost",
        "  tasks:",
        "    - name: IAM role",
        "      amazon.aws.iam_role:",
        "        name: app-role",
        "        state: present",
        "    - name: IAM policy",
        "      amazon.aws.iam_policy:",
        "        iam_type: role",
        "        iam_name: app-role",
        "        policy_name: app-policy",
        "    - name: KMS key",
        "      amazon.aws.kms_key:",
        "        alias: alias/app",
        "    - name: Secrets Manager",
        "      amazon.aws.secretsmanager_secret:",
        "        name: db-password",
        "    - name: Vault policy",
        "      community.hashi_vault.vault_policy:",
        "        name: app"
      ]
    },
    "databases/core.ts": {
      fn: "databasesTemplate",
      lines: [
        "- name: Databases",
        "  hosts: localhost",
        "  tasks:",
        "    - name: RDS",
        "      amazon.aws.rds_instance:",
        "        db_instance_identifier: app-db",
        "        db_instance_class: db.t3.micro",
        "        engine: postgres",
        "    - name: DynamoDB",
        "      amazon.aws.dynamodb_table:",
        "        name: items",
        "        hash_key_name: id",
        "    - name: Cloud SQL",
        "      google.cloud.gcp_sql_instance:",
        "        name: sql",
        "        region: us-central1",
        "    - name: MongoDB Atlas",
        "      community.mongodb.mongodb_atlas_cluster:",
        "        name: cluster",
        "    - name: Redis",
        "      community.aws.elasticache:",
        "        name: cache",
        "        engine: redis"
      ]
    },
    "monitoring/core.ts": {
      fn: "monitoringTemplate",
      lines: [
        "- name: Monitoring",
        "  hosts: localhost",
        "  tasks:",
        "    - name: CloudWatch alarm",
        "      amazon.aws.cloudwatch_metric_alarm:",
        "        name: cpu-high",
        "        metric: CPUUtilization",
        "    - name: Datadog monitor",
        "      datadog.datadog.monitor:",
        "        name: app latency",
        "        query: avg(last_5m):avg:app.latency{*} > 1",
        "    - name: New Relic policy",
        "      newrelic.newrelic.alert_policy:",
        "        name: app policy",
        "    - name: PagerDuty service",
        "      pagerduty.pagerduty.service:",
        "        name: app",
        "    - name: Slack alert",
        "      community.general.slack:",
        "        channel: '#alerts'",
        "        msg: 'Alarm fired'"
      ]
    },
    "ci-cd/core.ts": {
      fn: "cicdTemplate",
      lines: [
        "- name: CI/CD",
        "  hosts: localhost",
        "  tasks:",
        "    - name: CodePipeline",
        "      amazon.aws.codepipeline:",
        "        name: app-pipeline",
        "        state: present",
        "    - name: GitLab project hook",
        "      community.general.gitlab_project_hook:",
        "        project: app",
        "        url: https://ci.example.com",
        "    - name: ArgoCD app",
        "      community.kubernetes.helm:",
        "        name: argocd",
        "        chart_ref: argo/argo-cd",
        "    - name: Spinnaker deploy",
        "      community.general.spinnaker:",
        "        application: app",
        "        state: present"
      ]
    },
    "serverless/core.ts": {
      fn: "serverlessTemplate",
      lines: [
        "- name: Serverless",
        "  hosts: localhost",
        "  tasks:",
        "    - name: Lambda",
        "      amazon.aws.lambda:",
        "        name: api",
        "        runtime: python3.11",
        "        handler: index.handler",
        "    - name: API Gateway",
        "      amazon.aws.apigateway:",
        "        name: http-api",
        "        state: present",
        "    - name: Step Functions",
        "      amazon.aws.stepfunctions_state_machine:",
        "        name: flow",
        "    - name: EventBridge rule",
        "      amazon.aws.cloudwatchevent_rule:",
        "        name: hourly",
        "        schedule_expression: rate(1 hour)"
      ]
    }
  },
  puppet: {
    "cloud-providers/core.ts": {
      fn: "cloudProvidersTemplate",
      lines: [
        "aws_ec2_instance { 'web':",
        "  instance_type => 't3.micro',",
        "  image_id      => 'ami-123456',",
        "}",
        "azure_vm { 'web-vm':",
        "  size => 'Standard_B1s',",
        "}",
        "gcp_compute_instance { 'web':",
        "  machine_type => 'e2-micro',",
        "}"
      ]
    },
    "containers/core.ts": {
      fn: "containersTemplate",
      lines: [
        "docker::image { 'app':",
        "  image_tag => 'latest',",
        "}",
        "kubernetes::manifest { 'app-deploy':",
        "  ensure  => present,",
        "  content => file('manifests/app.yaml'),",
        "}",
        "helm::release { 'app':",
        "  chart => 'bitnami/nginx',",
        "}",
        "aws_ecs_service { 'app':",
        "  desired_count => 2,",
        "}"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
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
        "}"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "aws_iam_role { 'app-role':",
        "  assume_role_policy => '{}',",
        "}",
        "aws_iam_policy { 'app-policy':",
        "  policy => '{}',",
        "}",
        "aws_kms_key { 'app-key':",
        "  description => 'app key',",
        "}",
        "aws_secretsmanager_secret { 'db-password':",
        "  name => 'db-password',",
        "}",
        "vault::policy { 'app':",
        "  rules => 'path \\\"secret/*\\\" { capabilities = [\\\"read\\\"] }',",
        "}"
      ]
    },
    "databases/core.ts": {
      fn: "databasesTemplate",
      lines: [
        "aws_db_instance { 'app-db':",
        "  engine => 'postgres',",
        "  instance_class => 'db.t3.micro',",
        "}",
        "aws_dynamodb_table { 'items':",
        "  hash_key => 'id',",
        "}",
        "google_sql_database_instance { 'sql':",
        "  database_version => 'POSTGRES_15',",
        "}",
        "mongodb_atlas_cluster { 'cluster':",
        "  project_id => 'demo',",
        "}",
        "aws_elasticache_cluster { 'cache':",
        "  engine => 'redis',",
        "}"
      ]
    },
    "monitoring/core.ts": {
      fn: "monitoringTemplate",
      lines: [
        "aws_cloudwatch_metric_alarm { 'cpu-high':",
        "  metric_name => 'CPUUtilization',",
        "  threshold   => 80,",
        "}",
        "datadog_monitor { 'app-latency':",
        "  query => 'avg(last_5m):avg:app.latency{*} > 1',",
        "}",
        "newrelic_alert_policy { 'app-policy':",
        "  name => 'app policy',",
        "}",
        "pagerduty_service { 'app':",
        "  name => 'app',",
        "}",
        "slack::alert { 'alarm':",
        "  channel => '#alerts',",
        "}"
      ]
    },
    "ci-cd/core.ts": {
      fn: "cicdTemplate",
      lines: [
        "aws_codepipeline { 'app-pipeline':",
        "  state => 'present',",
        "}",
        "gitlab::hook { 'app-hook':",
        "  project => 'app',",
        "  url     => 'https://ci.example.com',",
        "}",
        "argocd::application { 'app':",
        "  repo_url => 'https://github.com/org/app',",
        "  path     => 'k8s',",
        "}",
        "spinnaker::application { 'app':",
        "  ensure => present,",
        "}"
      ]
    },
    "serverless/core.ts": {
      fn: "serverlessTemplate",
      lines: [
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
        "}"
      ]
    }
  },
  chef: {
    "cloud-providers/core.ts": {
      fn: "cloudProvidersTemplate",
      lines: [
        "aws_ec2_instance 'web' do",
        "  instance_type 't3.micro'",
        "  image_id 'ami-123456'",
        "end",
        "azure_vm 'web-vm' do",
        "  size 'Standard_B1s'",
        "end",
        "gcp_compute_instance 'web' do",
        "  machine_type 'e2-micro'",
        "end"
      ]
    },
    "containers/core.ts": {
      fn: "containersTemplate",
      lines: [
        "docker_image 'app' do",
        "  tag 'latest'",
        "end",
        "kubernetes_manifest 'app-deploy' do",
        "  yaml_path '/etc/k8s/app.yaml'",
        "end",
        "helm_release 'app' do",
        "  chart 'bitnami/nginx'",
        "end",
        "aws_ecs_service 'app' do",
        "  desired_count 2",
        "end"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
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
        "end"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "aws_iam_role 'app-role' do",
        "  assume_role_policy '{}'",
        "end",
        "aws_iam_policy 'app-policy' do",
        "  policy '{}'",
        "end",
        "aws_kms_key 'app-key' do",
        "  description 'app key'",
        "end",
        "aws_secretsmanager_secret 'db-password' do",
        "  name 'db-password'",
        "end",
        "vault_policy 'app' do",
        "  rules 'path \"secret/*\" { capabilities = [\"read\"] }'",
        "end"
      ]
    },
    "databases/core.ts": {
      fn: "databasesTemplate",
      lines: [
        "aws_db_instance 'app-db' do",
        "  engine 'postgres'",
        "  instance_class 'db.t3.micro'",
        "end",
        "aws_dynamodb_table 'items' do",
        "  hash_key 'id'",
        "end",
        "google_sql_database_instance 'sql' do",
        "  database_version 'POSTGRES_15'",
        "end",
        "mongodb_atlas_cluster 'cluster' do",
        "  project_id 'demo'",
        "end",
        "aws_elasticache_cluster 'cache' do",
        "  engine 'redis'",
        "end"
      ]
    },
    "monitoring/core.ts": {
      fn: "monitoringTemplate",
      lines: [
        "aws_cloudwatch_metric_alarm 'cpu-high' do",
        "  metric_name 'CPUUtilization'",
        "  threshold 80",
        "end",
        "datadog_monitor 'app-latency' do",
        "  query 'avg(last_5m):avg:app.latency{*} > 1'",
        "end",
        "newrelic_alert_policy 'app-policy' do",
        "  name 'app policy'",
        "end",
        "pagerduty_service 'app' do",
        "  name 'app'",
        "end",
        "slack_alert 'alarm' do",
        "  channel '#alerts'",
        "end"
      ]
    },
    "ci-cd/core.ts": {
      fn: "cicdTemplate",
      lines: [
        "aws_codepipeline 'app-pipeline' do",
        "  name 'app-pipeline'",
        "end",
        "gitlab_project_hook 'app-hook' do",
        "  project 'app'",
        "  url 'https://ci.example.com'",
        "end",
        "argocd_application 'app' do",
        "  repo_url 'https://github.com/org/app'",
        "  path 'k8s'",
        "end",
        "spinnaker_application 'app' do",
        "  ensure :present",
        "end"
      ]
    },
    "serverless/core.ts": {
      fn: "serverlessTemplate",
      lines: [
        "aws_lambda_function 'api' do",
        "  runtime 'nodejs18.x'",
        "  handler 'index.handler'",
        "end",
        "aws_apigatewayv2_api 'http-api' do",
        "  protocol_type 'HTTP'",
        "end",
        "aws_sfn_state_machine 'flow' do",
        "  definition '{}'",
        "end",
        "aws_cloudwatch_event_rule 'hourly' do",
        "  schedule_expression 'rate(1 hour)'",
        "end"
      ]
    }
  },
  dockerfile: {
    "cloud-providers/core.ts": {
      fn: "cloudProvidersTemplate",
      lines: [
        "FROM debian:bookworm-slim",
        "RUN apt-get update && apt-get install -y curl unzip",
        "RUN curl -sL https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip && unzip awscliv2.zip",
        "RUN ./aws/install",
        "RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash",
        "RUN curl -sL https://sdk.cloud.google.com | bash"
      ]
    },
    "containers/core.ts": {
      fn: "containersTemplate",
      lines: [
        "FROM node:20-alpine AS build",
        "WORKDIR /app",
        "COPY package*.json ./",
        "RUN npm ci",
        "COPY . .",
        "RUN npm run build",
        "FROM nginx:alpine",
        "COPY --from=build /app/dist /usr/share/nginx/html"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "FROM alpine:3.19",
        "RUN apk add --no-cache curl",
        "EXPOSE 8080",
        "HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8080/health || exit 1",
        "CMD [\"/bin/sh\", \"-c\", \"echo ready\"]"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "FROM alpine:3.19",
        "RUN addgroup -S app && adduser -S app -G app",
        "USER app",
        "WORKDIR /home/app",
        "ENV NODE_ENV=production",
        "CMD [\"/bin/sh\", \"-c\", \"echo secure\"]"
      ]
    },
    "databases/core.ts": {
      fn: "databasesTemplate",
      lines: [
        "FROM debian:bookworm-slim",
        "RUN apt-get update && apt-get install -y postgresql-client redis-tools",
        "RUN curl -sL https://downloads.mongodb.com/compass/mongosh.deb -o mongosh.deb",
        "RUN dpkg -i mongosh.deb || apt-get -f install -y",
        "CMD [\"/bin/sh\", \"-c\", \"psql --version\"]"
      ]
    },
    "monitoring/core.ts": {
      fn: "monitoringTemplate",
      lines: [
        "FROM alpine:3.19",
        "ENV DD_AGENT_HOST=datadog",
        "ENV NEW_RELIC_APP_NAME=app",
        "RUN apk add --no-cache curl",
        "CMD [\"/bin/sh\", \"-c\", \"echo monitoring\"]"
      ]
    },
    "ci-cd/core.ts": {
      fn: "cicdTemplate",
      lines: [
        "FROM golang:1.22 AS build",
        "WORKDIR /src",
        "COPY . .",
        "RUN --mount=type=cache,target=/go/pkg/mod go build -o app ./cmd/app",
        "FROM gcr.io/distroless/base-debian12",
        "COPY --from=build /src/app /app",
        "ENTRYPOINT [\"/app\"]"
      ]
    },
    "serverless/core.ts": {
      fn: "serverlessTemplate",
      lines: [
        "FROM public.ecr.aws/lambda/nodejs:18",
        "COPY index.js ./",
        "CMD [\"index.handler\"]"
      ]
    }
  }
};

const writeTemplates = (language, entries) => {
  Object.entries(entries).forEach(([relPath, data]) => {
    const fullPath = join(ROOT, "packages", "languages", language, "src", "templates", relPath);
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, renderTemplate(data.fn, data.lines));
  });
};

Object.entries(TEMPLATE_DATA).forEach(([language, entries]) => {
  writeTemplates(language, entries);
});

console.log("Generated Batch 10 template files.");
