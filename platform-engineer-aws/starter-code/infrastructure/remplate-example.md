# CloudFormation Template - STARTER
# Expand this template to meet the requirements

AWSTemplateFormatVersion: '2010-09-09'
Description: 'User Profile API - Platform Engineer Assessment'

Parameters:
  Environment:
    Type: String
    Default: dev

  ProjectName:
    Type: String
    Default: user-profile-api

  DBPassword:
    Type: String
    NoEcho: true
    MinLength: 8
    Description: Database password

Resources:
  # ============================================
  # COGNITO
  # ============================================

  UserPool:
    Type: AWS::Cognito::UserPool
    Properties:
      UserPoolName: !Sub '${ProjectName}-${Environment}-users'
      AutoVerifiedAttributes:
        - email
      UsernameAttributes:
        - email
      Policies:
        PasswordPolicy:
          MinimumLength: 8
          RequireLowercase: true
          RequireNumbers: true
          RequireSymbols: false
          RequireUppercase: true

  UserPoolClient:
    Type: AWS::Cognito::UserPoolClient
    Properties:
      ClientName: !Sub '${ProjectName}-${Environment}-client'
      UserPoolId: !Ref UserPool
      GenerateSecret: false
      ExplicitAuthFlows:
        - ALLOW_USER_PASSWORD_AUTH
        - ALLOW_REFRESH_TOKEN_AUTH

  # ============================================
  # SSM PARAMETER (System Secret)
  # ============================================

  SystemSecret:
    Type: AWS::SSM::Parameter
    Properties:
      Name: !Sub '/${ProjectName}/${Environment}/system-secret'
      Type: String
      Value: 'PLATFORM-ENGINEER-2025-SECRET'

Outputs:
  UserPoolId:
    Value: !Ref UserPool

  UserPoolClientId:
    Value: !Ref UserPoolClient

  # TODO: Add more outputs
  # - API Gateway URL
  # - RDS Endpoint
  # - ECS Cluster ARN
