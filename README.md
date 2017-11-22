# jeffws-tutorial

Build a service API using jeffws-service

## Prerequisites

This tutorial depends on some AWS resources.

Create a .env file with your AWS credentials:

```bash
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

Create DynamoDB tables named:

* Tutorial.Articles
* Tutorial.Comments

## Install dependencies

Install node packages with NPM

```bash
npm install
```

## Run the app locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser, and you will see the API explorer.

## Deploy to AWS

Details coming soon
