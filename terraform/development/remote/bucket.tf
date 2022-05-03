resource "aws_s3_bucket" "bucketdev" {
  bucket = var.aws_bucket_name
  tags = {
    Environment = var.env
  }
}

resouce "aws_s3_bucket_acl" "bucketdev" {
  bucket = var.aws_bucket_name
  acl = "public-read"
}

resource "aws_s3_bucket_lifecycle_configuration" "bucketdev" {
  bucket = var.aws_bucket_name
  rule {
    id      = "cleanup"
    prefix  = "cleanup/"
    enabled = true
    expiration {
      days = 1
    }
  }
}

resource "aws_s3_bucket_policy" "bucketdev" {
  bucket = var.aws_bucket_name
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
