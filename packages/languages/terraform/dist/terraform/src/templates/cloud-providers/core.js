"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudProvidersTemplate = cloudProvidersTemplate;
function cloudProvidersTemplate() {
  return [
    'provider "aws" { region = "us-east-1" }',
    'resource "aws_instance" "web" { ami = "ami-123456" instance_type = "t3.micro" }',
    'provider "azurerm" { features {} }',
    'resource "azurerm_linux_virtual_machine" "vm" { name = "web-vm" size = "Standard_B1s" admin_username = "azureuser" }',
    'provider "google" { project = "demo" region = "us-central1" }',
    'resource "google_compute_instance" "vm" { name = "web" machine_type = "e2-micro" zone = "us-central1-a" }',
  ].join("\n");
}
