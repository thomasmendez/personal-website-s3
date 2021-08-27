variable "env" {
    description = "Environment"
    type = string
    default = "dev"
}
variable "aws_region" {
    description = "AWS region"
    type = string
    default = "us-east-2"
}
variable "aws_bucket_name" {
    description = "S3 Bucket Name"
    type = string
    default = "mybucketname"
}