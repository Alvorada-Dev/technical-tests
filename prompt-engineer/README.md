# AI / Prompt Engineer - Technical Assessment

## The Challenge

You are given:

1. A sample bank statement CSV (`bank_statement.csv`) representing a typical Gen Z user
2. A basic prompt (`base_prompt.txt`) that produces suboptimal results

Your task is to:

1. **Build a Node.js/TypeScript application** that processes bank statements via OpenAI's API
2. **Optimize the prompt** to dramatically improve output quality and reduce hallucinations

---

## Part 1: Application Development

Build a TypeScript/Node.js application with the following requirements:

### Functional Requirements

- Accept CSV file upload containing bank statement data
- Parse the CSV and send it to OpenAI's API (GPT-4 or GPT-3.5-turbo)
- Return the AI-generated analysis as JSON
- Handle errors gracefully

### Technical Requirements

- Use TypeScript (strict mode preferred)
- Use Node.js with Express (or similar framework)
- Implement proper CSV parsing
- Environment variables for API keys
- Basic input validation

### API Endpoint

```
POST /analyze
Content-Type: multipart/form-data

Request: CSV file upload
Response: JSON with analysis results
```

---

## Part 2: Prompt Optimization

The provided `base_prompt.txt` is intentionally basic and produces unreliable results. Your task is to optimize it.

### Your Optimization Goals

1. **Accuracy**: All numbers must match the actual data
2. **Consistency**: Categories should be well-defined and stable
3. **Actionability**: Insights should be specific to this user's behavior
4. **Reliability**: Reduce variance between runs

### Expected Output Structure

Your optimized prompt should produce output that includes:

- Total income and expenses (accurate to the cent)
- Spending breakdown by category with percentages
- Month-over-month comparison
- Specific, data-backed recommendations
- Identification of recurring vs. one-time expenses

---

## Part 3: Documentation

Create a brief document (`SOLUTION.md`) explaining:

1. **Prompt Changes**: What did you change and why?
2. **Hallucination Mitigation**: How did you reduce AI fabrication?
3. **Testing Approach**: How did you validate improvements?
4. **Trade-offs**: Any compromises you made and why?

---

## Deliverables

GitHub repository containing:

```
src/
└── ... (your application code)
optimized_prompt.txt
package.json
tsconfig.json
.env.example
SOLUTION.md
README.md (setup instructions)
```

---

## Getting Started

1. Clone/download this assessment
2. Review `bank_statement.csv` to understand the data
3. Test `base_prompt.txt` with OpenAI to see current issues
4. Build your application
5. Iterate on your prompt optimization
6. Document your approach

---

## Time Limit

This assessment is designed to be completed in **4 hours**, though treat this as a guideline rather than a strict requirement.

Focus on quality over quantity. A well-optimized prompt with a working basic app is better than a complex app with a mediocre prompt.

---

## Tips

- Test your prompt multiple times to check for consistency
- The CSV has intentional complexity (multiple income sources, P2P payments, subscriptions)
- Consider edge cases: What if a transaction could fit multiple categories?
- Think about how your prompt would perform with different bank statements

---

## Questions?

If you have questions about the requirements, please reach out to your recruiter contact.

Good luck! We're excited to see your approach to this challenge.