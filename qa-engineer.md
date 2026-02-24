# 🧪 Take-Home Assignment — Senior QA Engineer

## 🎯 Objective

This exercise is designed to evaluate:

- Strategic quality thinking  
- Risk-based testing approach  
- Practical automation skills  
- Technical communication clarity  

⏱️ **Expected time:** up to 4 hours  
📦 **Submission:** Git repository or compressed file

---

# 📌 Scenario

You are working on a new feature of a web application.

## Feature: Document Upload & Data Extraction

Users can:

1. Upload PDF files containing technical documents  
2. The system processes the document and automatically extracts structured data  
3. The user can review and edit the extracted data  
4. The data is saved and used in downstream product workflows  

Assume that:

- The application has a web frontend  
- There is an API responsible for processing  
- Processing may take several seconds  
- Extraction failures may occur  

You may make reasonable assumptions — just document them.

> 💡 You may create a minimal sample page or API mock if helpful.

---

# 🧩 Part 1 — Test Strategy

Create a **test strategy / test plan** for this feature.

## Include

- Testing scope  
- Types of testing you would perform  
- Key scenarios (happy path + edge cases)  
- Test data strategy  
- Manual vs automated testing approach  
- Quality / release readiness criteria  
- Identified risks and mitigation strategies  

📄 **Format:** Markdown, Google Doc, or PDF  
🎯 **Focus:** structured and pragmatic thinking

---

# 🤖 Part 2 — Test Automation (Hands-on)

Implement a **small set of automated tests** for this feature.

## Requirements

- You may choose the testing stack (Playwright, Cypress, Jest, Vitest, etc.)  
- Prioritize clarity and structure  
- Full coverage is **not** expected  
- Focus on what you believe provides the highest value to automate first  

## Expectations

- A small but well-structured test suite  
- Clean, readable code  
- Clear instructions to run the tests  

You may:

- Mock the API  
- Simulate responses  
- Create a simple fake page  
- Or test a fictional API  

The goal is to evaluate **how you design tests**, not environment complexity.

---

# 📦 Deliverables

Please submit to a Github repository:

1. Test strategy document  
2. Automated test code  
3. A README including:

   - How to run the tests  
   - Assumptions made  
   - Relevant technical decisions  

---

# 🧠 What We Will Evaluate

- Clarity and pragmatism of the strategy  
- Risk-based coverage  
- Test code quality  
- Project organization  
- Prioritization ability  
- Technical communication  

---

# 🎤 Live Discussion (Next Stage)

During the technical interview, we will discuss:

- The key risks you identified  
- What you would prioritize automating first and why  
- Possible improvements to your solution  
- Tradeoffs behind your decisions  

---

# ❗ Guidelines

- Over-engineering is not necessary  
- We prefer simple, well-reasoned solutions  
- Make and document reasonable assumptions  
