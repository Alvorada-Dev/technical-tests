# Technical Take-Home Exercise

**Role:** Senior Full Stack Engineer  
**Estimated Time:** ~4 hours

---

## Overview

Build a minimal system that connects to a user's Outlook email inbox, ingests and stores recent emails, extracts metadata (including attachment information), and uses an AI agent to generate insights across email threads.

This test evaluates:

- Full-stack skills
- OAuth integration and email access
- Data modeling
- Practical AI/LLM usage
- System design and trade-off thinking

UI polish, production-grade security, and attachment content parsing are **not** required.

---

## Goals

Your solution should:

1. Allow the user to log in via Microsoft Outlook (OAuth)
2. Fetch recent emails from their Outlook account
3. Store normalized data and attachment metadata
4. Use an AI agent to analyze email threads for insights
5. Provide a minimal frontend to view messages and insights

---

## Requirements

### Frontend (Next.js + TypeScript)

Implement a simple interface that:

- Lets the user sign in with their Microsoft Outlook account
  - Use **Clerk** for authentication (free tier is sufficient)
  - Configure Clerk's Microsoft OAuth provider for Outlook access
- Triggers email synchronization
- Lists email messages
- Shows insights about the messages

Security hardening (token storage, encryption at rest, etc.) is out of scope.

---

### Backend (NestJS + TypeScript)

#### Email Sync Endpoint

`POST /email/sync`

Should:

- Use the OAuth token from Clerk to access the user's Outlook mailbox via Microsoft Graph API
- Fetch the latest N emails (10-20)
- Group them by thread (using `conversationId` from Graph API)
- Extract and store:
  - Unique message ID
  - Thread/Conversation ID
  - From / To / CC
  - Subject
  - Timestamp
  - Plain text body
  - Attachment metadata:
    - Filename
    - MIME type
    - Size (if available)
    - Count

Do **not** download attachment content.

---

### Agent-Style Thread Insights

Implement a backend component that generates structured insights for a thread.

For a thread, agent output should include:

```json
{
	"summary": "Short summary of the thread",
	"participants": ["Alice", "Bob"],
	"topics": ["scheduling", "invoice"],
	"action_items": [{ "task": "Review attached invoice PDF", "owner": "Alice" }],
	"urgency": "low | medium | high",
	"requires_response": true,
	"attachment_overview": {
		"count": 2,
		"types": ["pdf", "docx"],
		"mentions": ["invoice", "contract"]
	}
}
```

Agent behavior should:

- Run when emails are synced or when a thread is viewed
- Use all emails in the thread
- Accept prior state (if any) and update it
- Produce structured JSON via a single well-designed LLM prompt

No agent frameworks are required.

---

### Data Modeling (PostgreSQL)

Your schema should support:

- Email threads
- Email messages
- Attachment metadata
- Agent insights linked to threads

Design for clarity and queryability.

---

### API Endpoints

Implement minimal endpoints:

```
POST /email/sync
GET  /threads
GET  /threads/:id
```

`GET /threads/:id` should return:

- Raw email list for that thread
- Attachment metadata
- Agent insights
- Last updated timestamp

---

### Frontend - Thread View

For a selected thread, display:

- List of emails (sender, subject, timestamp)
- Attachment counts and types
- Agent summary and structured fields

Basic HTML/UX is sufficient. Focus on functionality.

---

## Authentication Setup

### Clerk + Microsoft OAuth

1. Create a free Clerk application at [clerk.com](https://clerk.com)
2. Enable the **Microsoft** OAuth provider in Clerk's dashboard
3. Configure the required Microsoft Graph API scopes:
   - `Mail.Read` (to read emails)
   - `User.Read` (for user profile)
4. Use Clerk's React SDK (`@clerk/nextjs`) for the frontend
5. Pass the OAuth access token to your backend for Graph API calls

Clerk handles the OAuth flow and token management. Your backend should accept the access token and use it to call the Microsoft Graph API.

---

## Non-Functional Expectations

- Clear TypeScript types
- Thoughtful separation of layers
- Reasonable error handling
- Clean project structure
- Documented assumptions

---

## Submission Instructions

1. GitHub repository link
2. README including:
   - Setup and run instructions (including Clerk configuration steps)
   - Approach and trade-offs
   - Prompt design for the agent
   - Schema description

---

## Optional Enhancements (Nice-to-Have)

These are not required but would stand out:

- Incremental sync (cursor-based using Graph API delta queries)
- Thread deduplication
- Background email sync queue
- Caching agent results

---

## Out of Scope

- Attachment content parsing
- Browser extension or mobile UI
- Production OAuth token persistence
- UI styling or animations
