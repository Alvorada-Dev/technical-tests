# Senior Software Engineer, AI Operations

## Objective

This exercise evaluates how you:

* Diagnose issues in LLM-based systems under ambiguity
* Distinguish between bugs, prompt design flaws, retrieval issues, and expected model behavior
* Apply prompt engineering with clear intent and measurable outcomes
* Reason about system-level improvements across multiple clients
* Make precise, minimal code changes within existing systems
* Communicate decisions with strong technical judgment

---

## Time Expectation

**Up to 4 hours. Do not exceed.**

We care about how you think, not how much time you spend.

---

## Context

You are joining Lahzo as a **Senior AI Operations Engineer**.

You are embedded in the onboarding team and responsible for ensuring that AI agents behave correctly across multiple clients.

A high-priority client has reported inconsistent and unreliable agent behavior. This client is in a revenue-critical onboarding phase.

You are given:

* Prompt configuration
* Conversation logs
* Internal LLM input/output logs
* A small portion of the prompt-building code

Your goal is to **diagnose, fix, and improve the system with minimal disruption**.

---

# Part 1 — Multi-Case Debugging

## Current Prompt

```txt
You are a sales assistant for ACME Corp.

Answer user questions about our products.

Be helpful and friendly.

Product info:
- Product A costs $100
- Product B costs $200

If you don't know something, try to help anyway.
```

---

## Conversation Logs

### Case 1

User:

> How much does Product A cost?

Assistant:

> Product A costs $120.

---

### Case 2

User:

> Do you offer refunds?

Assistant:

> Yes, we offer full refunds within 60 days.

(No refund policy exists)

---

### Case 3

User:

> Is Product B better than Product A?

Assistant:

> Yes, Product B is always better in every situation.

---

### Case 4

User:

> I want something affordable

Assistant:

> I recommend Product B.

---

### Case 5

User:

> Can I integrate this with Salesforce?

Assistant:

> Yes, we have a native Salesforce integration.

(No such integration exists, but docs mention “API access”)

---

## Tasks

For each case:

1. Classify the root cause:

   * Bug
   * Prompt design issue
   * Missing or weak context
   * Retrieval failure
   * Expected LLM behavior

2. Explain your reasoning clearly

3. Identify:

   * Which issues are **systemic**
   * Which are **isolated**

---

Then:

4. List the **top 5 flaws in the current prompt**
5. Rank them by impact
6. Identify which ones you would fix **first in production**, and why

---

# Part 2 — Prompt Redesign

## Goal

Redesign the prompt to:

* Prevent hallucinations
* Enforce strict grounding in provided context
* Handle missing information safely
* Maintain a consultative, sales-friendly tone
* Adapt responses based on user intent
* Avoid overconfident or absolute claims

---

## Deliverables

1. New prompt (production-ready)

2. Explanation:

   * What you changed
   * Why
   * Expected behavioral differences

3. Trade-offs:

   * What might get worse?
   * What risks remain?

---

# Part 3 — LLM Logs & Failure Analysis

## Case A

```json
{
  "input": {
    "system_prompt": "...",
    "user_message": "Do you have enterprise pricing?"
  },
  "retrieved_context": "",
  "model_output": "Yes, enterprise pricing starts at $999/month."
}
```

### Questions

1. What is the most likely root cause?
2. Why did the model behave this way?
3. How would you fix it:

   * Short term (fast patch)
   * Long term (system improvement)

---

## Case B

```json
{
  "input": {
    "system_prompt": "...",
    "user_message": "Tell me about Product A"
  },
  "retrieved_context": "Product A costs $100"
},
  "model_output": "Product A is our premium AI-powered solution with advanced analytics."
```

### Questions

4. What failure mode is this?
5. Why is the model ignoring the provided context?
6. How would you improve reliability here?

---

## Case C

```json
{
  "input": {
    "system_prompt": "...",
    "user_message": "Which product is best for startups?"
  },
  "retrieved_context": "Product A costs $100\nProduct B costs $200"
},
  "model_output": "Product B is the best choice for startups."
}
```

7. Is this incorrect?
8. Would you fix it? Why or why not?
9. What signal would you need to decide?

---

# Part 4 — Code Intervention

## Current Implementation

```ts
function buildPrompt(context: string, userMessage: string) {
  return `
You are a helpful assistant.

Context:
${context}

User:
${userMessage}
`;
}
```

---

## Reported Issues

* Model ignores context intermittently
* Hallucinates when context is empty
* Cannot distinguish instructions vs. knowledge
* No control over tone or constraints

---

## Tasks

1. Identify architectural issues in this implementation

2. Rewrite the function to:

   * Clearly separate:

     * System instructions
     * Context (retrieval)
     * User input
   * Add guardrails against hallucination
   * Improve determinism

3. Explain:

   * Why your version is more reliable
   * What limitations still exist

---

# Part 5 — Systems Thinking & Operations

Answer the following:

### 1. Pattern Detection at Scale

You are managing ~10 clients with similar issues.

* How would you identify patterns across them?
* What signals or metrics would you track?

---

### 2. Internal Tooling

What would you build to improve:

* Debugging speed
* Prompt iteration
* Client visibility

Be specific (interfaces, inputs, outputs)

---

### 3. Triage Framework

How do you decide if an issue is:

* A real bug
* A prompt/config issue
* A retrieval/data issue
* Expected LLM limitation
* Client misunderstanding

Describe your decision framework

---

### 4. Communication

Write a short response (5–8 lines) to a non-technical client explaining why the AI gave a wrong answer **without blaming the model**.

---

# 📤 Submission

* Markdown / Notion / Google Doc
* Optional: code in `.ts` or GitHub gist

---

# 🧠 What We Evaluate

* Depth of reasoning under ambiguity
* Debugging methodology
* LLM intuition (not just theory)
* Trade-off awareness
* Communication clarity
* Ownership mindset

---

# 🚫 What We Don’t Optimize For

* Perfect answers
* Over-engineering
* Memorized LLM theory