# Platform Engineer - Technical Assessment

## Overview

Build a **user profile API** deployed on AWS using infrastructure as code. This challenge evaluates your ability to design and deploy cloud infrastructure with proper security practices.

---

## The Challenge

Build a backend API with:

1. **Backend**: Node.js/TypeScript API running on ECS Fargate
2. **Database**: RDS PostgreSQL for user data
3. **Authentication**: Amazon Cognito for user management
4. **Secrets**: SSM Parameter injected into ECS task
5. **Infrastructure**: CloudFormation template for all resources

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐
│  API Gateway    │────▶│   ECS Fargate   │
│  + Cognito Auth │     │   (Backend)     │
└─────────────────┘     └────────┬────────┘
                                 │
        ┌─────────────────┐      │
        │     Cognito     │◀─────┤
        │   (User Pool)   │      │
        └─────────────────┘      │
                                 │
        ┌─────────────────┐      │
        │  SSM Parameter  │──────┤
        │  (System Secret)│      │
        └─────────────────┘      ▼
                        ┌─────────────────┐
                        │       RDS       │
                        │  (PostgreSQL)   │
                        └─────────────────┘
```

---

## Functional Requirements

### API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/health` | GET | No | Health check |
| `/profile` | GET | Yes | Get user profile (by Cognito sub) |
| `/profile` | PUT | Yes | Update user profile |
| `/system/secret` | GET | Yes | Return the injected SSM secret |

### Database Schema

```sql
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cognito_sub VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Infrastructure Requirements

Your CloudFormation template must include:

### Required Resources
- ECS Cluster (Fargate)
- ECS Task Definition with SSM secret injection
- ECS Service
- Application Load Balancer + Target Group
- RDS PostgreSQL (db.t3.micro)
- Cognito User Pool + Client
- API Gateway with Cognito Authorizer
- SSM Parameter (the "system secret")
- Security Groups (ALB → ECS → RDS)
- IAM Roles (Task Execution + Task Role)

### CI/CD Requirements

Create a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers** on push/merge to `main` branch
2. **Builds** the Docker image
3. **Pushes** to Amazon ECR
4. **Deploys** by updating the ECS service

Required GitHub Secrets (document in your README):
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

---

## Deliverables

```
.github/
└── workflows/
    └── deploy.yml      # GitHub Actions workflow
infrastructure/
└── template.yaml       # CloudFormation template
backend/
├── src/
├── Dockerfile
├── package.json
└── tsconfig.json
README.md               # Setup & deployment instructions
```

---

## AWS Account Setup

Use the **AWS Free Tier** to minimize costs:

- **Cognito**: 50,000 MAUs free
- **API Gateway**: 1M calls/month free
- **RDS**: 750 hours/month db.t3.micro (12 months)
- **ECS Fargate**: 750 hours/month (12 months)

**Important**: Delete your stack after evaluation to avoid charges.

---

## Starter Code

We provide minimal starter code in `starter-code/`:
- Basic Express server setup
- Example Dockerfile
- CloudFormation skeleton

You may modify or replace the starter code entirely.

---

## Time Limit

**4 hours**

Focus on a working deployment. A functional API with basic features is better than incomplete advanced features.

---

## Questions?

Contact your recruiter if you have questions about requirements.

Good luck!
