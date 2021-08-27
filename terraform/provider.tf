provider "aws" {
    version = "~> 2.0"
    region  = var.aws_region
}

terraform {
  backend "s3" {
    bucket = var.aws_bucket_name
    key    = "${var.aws_bucket_name}key"
    region = "eu-central-1"
  }
}