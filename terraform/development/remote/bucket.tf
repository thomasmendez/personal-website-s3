resource "aws_s3_bucket" "bucketdev" {
  bucket = var.aws_bucket_name
  acl    = "public-read"
  tags = {
    Environment = var.env
  }
  lifecycle_rule {
    id      = "cleanup"
    prefix  = "cleanup/"
    enabled = true
    expiration {
      days = 1
    }
  }
  policy = <<EOF
{
  "Id": "MakePublic",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.aws_bucket_name}/*",
      "Principal": "*"
    }
  ]
}
EOF
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

data "aws_s3_bucket" "bucketdev" {
  bucket = var.aws_bucket_name
}

output "bucketdev" {
  value = data.aws_s3_bucket.bucketdev.bucket
}
