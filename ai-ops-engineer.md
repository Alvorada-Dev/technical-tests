# Software Engineer, AI Operations

## Objective

Evaluate your ability to:

- Diagnose problems in systems using LLMs
- Differentiate between bugs, misconfiguration, and misuse
- Adjust prompts with clear intent
- Read logs and identify patterns
- Make small fixes to existing code
- Communicate technical decisions clearly

---

## Expected time

Up to 4 hours (do not exceed this)

---

## Context

You are acting as an AI Operations Engineer at Lahzo.

A client reported that the AI agent:

1. Is giving incorrect answers about the product
2. Sometimes “hallucinates” information
3. Does not follow the brand’s tone of voice
4. In some cases, ignores important instructions

You received:

- Conversation logs
- Prompt configuration
- A code snippet that builds the LLM context

Your mission is to investigate, diagnose, and fix.

---

# Part 1 — Conversation Debugging

## Input

### Current client prompt

```txt
You are a sales assistant for ACME Corp.
Answer user questions about our products.

Be helpful and friendly.

Product info:
- Product A costs $100
- Product B costs $200

If you don't know something, try to help anyway.
````

---

### Conversation logs

#### Case 1

User:

> How much does Product A cost?

Assistant:

> Product A costs $120.

---

#### Case 2

User:

> Do you offer refunds?

Assistant:

> Yes, we offer full refunds within 60 days.

(There is no refund policy)

---

#### Case 3

User:

> Is Product B better than Product A?

Assistant:

> Yes, Product B is always better in every situation.

---

#### Case 4

User:

> I want something cheap

Assistant:

> I recommend Product B.

---

## Tasks

1. For each case:

   * Identify the likely cause:

     * ( ) Bug
     * ( ) Bad prompt
     * ( ) Missing context
     * ( ) Expected LLM behavior

   * Explain your reasoning

2. List the main issues with the current prompt

3. Propose an improved version of the prompt

---

# Part 2 — Prompt Engineering

## Objective

Fix the agent’s behavior

## Requirements for the new prompt:

* Do not invent information
* Stay faithful to the provided context
* Maintain a consultative (non-aggressive) tone
* Make suggestions based on user context
* Admit when it does not know something

## Deliverable

Write a complete new prompt.

Explain:

* What you changed
* Why
* What behavioral effects you expect

---

# Part 3 — Log Analysis + LLM Intuition

## Input

### Internal system log

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

## Questions

1. What is the main problem?

2. Is this:

   * a bug?
   * a retrieval problem?
   * a prompt issue?

3. How would you fix it?

---

Another case:

```json
{
  "input": {
    "system_prompt": "...",
    "user_message": "Tell me about Product A"
  },
  "retrieved_context": "Product A costs $100"
},
  "model_output": "Product A is our premium solution with advanced AI features."
}
```

4. What happened here?
5. How would you prevent this behavior?

---

# Part 4 — Code

## Current code (TypeScript)

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

## Reported issues:

* The model sometimes ignores the context
* It responds confidently even without data
* It does not differentiate instructions from content

---

## Tasks

1. Identify problems in the prompt construction

2. Rewrite the function to improve:

   * Clear separation between instructions and context
   * Reduction of hallucinations
   * Better behavior control

3. Explain your decisions

---

# Part 5 — Systems Thinking

Answer:

1. If you had 10 clients with similar problems, how would you:

   * Detect patterns?
   * Avoid rework?

2. What kind of internal tool would you build?

3. How would you decide whether something is:

   * a real bug
   * a client error
   * an LLM limitation

---

# Submission

You can submit:

* Markdown / Notion / Google Doc
* Code in a `.ts` file or gist

---

# What we evaluate

* Clarity of thought
* Quality of diagnosis
* Technical depth
* Intuition with LLMs
* Communication
* Pragmatism

---

# What does NOT matter

* Perfection
* The “correct” answer
* Specific stack knowledge
