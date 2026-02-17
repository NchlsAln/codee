"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerOptimizationTemplate = dockerOptimizationTemplate;
function dockerOptimizationTemplate() {
  return [
    "# Dockerfile",
    "# FROM python:3.12-slim AS build",
    "# WORKDIR /app",
    "# COPY pyproject.toml poetry.lock ./",
    "# RUN pip install poetry && poetry export -f requirements.txt > requirements.txt",
    "# RUN pip install --user -r requirements.txt",
    "#",
    "# FROM python:3.12-slim",
    "# COPY --from=build /root/.local /root/.local",
    "# ENV PATH=/root/.local/bin:$PATH",
    "# COPY . /app",
  ].join("\n");
}
