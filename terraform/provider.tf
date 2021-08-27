provider "aws" {
    version = "~> 2.0"
    region  = "us-east-2"
}

terraform {
  backend "s3" {
    bucket = "mys3bucket"
    key    = "mys3bucketkey"
    region = "us-east-2"
  }
}