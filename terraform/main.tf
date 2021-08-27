resource "aws_s3_bucket" "s3Bucket" {
  bucket = var.aws_bucket_name
  acl = "public-read"
  tags = {
    Environment = var.env
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
  }
}