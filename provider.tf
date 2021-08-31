provider "aws" {
  version = "~> 2.0"
  region  = "us-east-2"
}

terraform {
  backend "s3" {
    bucket = "myawsbucketdev"
    key    = "myawsbucketdevkey"
    region = "us-east-2"
  }
}
