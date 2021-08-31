provider "aws" {
  version = "~> 2.0"
  region  = "us-east-2"
}

terraform {
  backend "s3" {
    bucket     = "myawsbucketdev"
    key        = "myawsbucketdevkey"
    access_key = var.access_key
    secret_key = var.secret_key
    region     = "us-east-2"
  }
}