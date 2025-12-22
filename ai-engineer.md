# Take-Home Test – Senior AI Engineer (Applied AI)

⏱ Estimated time: **up to 4 hours**

## Context

You are working for a **Commercial Real Estate** company that wants to apply **practical, business-oriented AI** to support its brokers.

The company has a database of properties for sale and allows brokers to add **free-text notes** about each property.  
Your goal is to transform this data into **structured insights** and build a **property scoring system** based on what a client is looking for.

This is a **proof of concept**, not a production-ready system.

---

## Objective

Build a small system that:

1. Creates a simple database of properties for sale
2. Uses AI to transform **unstructured notes** into **structured data**
3. Implements a **property scoring feature** that ranks properties based on a client’s textual requirements

---

## Technical Scope

### 1️⃣ Database

Create a small database using **MySQL, SQLite, or PostgreSQL** (your choice).

Minimum required tables:

#### `properties`

- `id`
- `title`
- `city`
- `neighborhood`
- `price`
- `area_m2`
- `property_type` (e.g. office, warehouse, retail)
- `created_at`

#### `property_notes`

- `id`
- `property_id`
- `user_id`
- `note_text`
- `created_at`

You can generate **fake/sample data** for testing.

---

### 2️⃣ Structuring unstructured notes (AI applied)

Each property can have multiple free-text notes written by brokers, for example:

> “Client visited today. Property is well located, close to the subway, needs minor renovation. Good for an office with up to 20 people.”

#### Task

Implement a process that:

- Reads the notes
- Extracts relevant information
- Transforms unstructured text into **structured data**, such as:
  - `near_subway` (yes/no)
  - `needs_renovation` (yes/no)
  - `estimated_capacity_people`
  - `recommended_use` (office, retail, logistics, etc.)

The structured output can be:

- Stored in a new table (e.g. `property_features`), **or**
- Returned as JSON

✅ **Using LLMs and AI APIs is allowed and encouraged.**

---

### 3️⃣ Property scoring based on client requirements

The broker types a free-text description of what the client is looking for, for example:

> “Client is looking for an office near the subway, budget up to $50k/month, for 15–20 people, preferably in a central area.”

#### Task

Implement a feature that:

- Reads the client’s text
- Compares it against available properties
- Assigns a **score from 0 to 10** to each property, indicating how well it matches the client’s needs

You may use:

- Simple rule-based logic
- Text similarity
- LLM-based reasoning
- Or a combination of these approaches

📌 Perfect accuracy is **not required**.  
We care about **clear logic, explainability, and practicality**.

---

## Deliverables

Please provide:

- Source code (GitHub repository or zip file)
- A `README.md` explaining:
  - How to run the project
  - Technical decisions and assumptions
  - Limitations
  - What you would improve with more time
- Examples of:
  - Input data
  - Output (structured features and scoring results)

---

## Evaluation Criteria

### We will strongly evaluate:

- Ability to turn **text into useful structured data**
- Practical and efficient use of AI
- Clarity of reasoning and solution design
- Business-oriented thinking
- Quality of documentation

### We will NOT evaluate:

- UI or frontend
- Visual design
- Heavy infrastructure or production-level concerns
- Model training complexity

---

## Notes

- Focus on **simplicity and impact**
- This is meant to reflect **real-world applied AI work**
- Overengineering is discouraged

Good luck — we’re excited to see how you approach real-world AI problems 🚀
