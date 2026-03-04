# 🛠 Production Support Engineer — Technical Assessment

## Overview

This assessment simulates a real workday as a Production Support Engineer during US business hours (Central Time).

The goal is to evaluate:

- Production troubleshooting maturity
- Root cause analysis ability
- Database investigation skills
- Operational prioritization
- Communication clarity (internal and external)
- Preventative and systems thinking

This is NOT a feature development exercise.

⏱ Expected time: 3–4 hours  
📦 Submission: PDF or Markdown document  
🧠 Make reasonable assumptions and document them clearly.

You are allowed to propose code changes and release hotfixes if necessary.

Structure your answers as you would structure your work during a real production day.

---

# 📅 Scenario: A Day in Production (US Central Time)

You are the Production Support Engineer on duty from 8:00 AM to 6:00 PM CT.

The core engineering team is based in India and will take over at the end of your shift.

Below is your day.

---

# 🕘 9:15 AM — Incident #1 (API Errors)

Customer support escalates:

Several users report intermittent **HTTP 500 errors** when accessing:

GET /api/v1/patients/:id/schedule

The issue began shortly after yesterday’s deployment.

---

## Log Snippet

```

[ERROR] 2024-06-12T14:32:11Z
TypeError: Cannot read properties of undefined (reading 'map')
at getPatientSchedule (/app/services/scheduleService.ts:58:22)
at processTicksAndRejections (node:internal/process/task_queues:96:5)

Request ID: 4f83a9c2
User ID: 8821

````

---

## Relevant Code (scheduleService.ts)

```ts
54  export async function getPatientSchedule(id: string) {
55    const appointments = await appointmentRepo.find({
56      where: { patientId: id }
57    });
58
59    const formatted = appointments.map(a => ({
60      id: a.id,
61      date: a.date,
62      provider: a.provider.name
63    }));
64
65    return formatted;
66  }
````

---

## Part 1 — Incident Investigation

Describe how you would approach this situation in production.

Include:

* Your initial hypothesis
* How you would debug the issue
* What logs, metrics, or data you would inspect
* Whether you would deploy a hotfix
* What immediate mitigations you might apply
* What you believe is the most probable root cause
* Risks associated with acting too quickly

Focus on reasoning, not just conclusions.

---

# 🕚 11:40 AM — Incident #2 (Performance Degradation)

Multiple enterprise users now report that the schedule page is extremely slow.

You identify the following query being executed frequently:

```sql
SELECT *
FROM appointments
WHERE patient_id = $1
ORDER BY created_at DESC;
```

---

## Table Schema

```sql
CREATE TABLE appointments (
    id UUID PRIMARY KEY,
    patient_id UUID NOT NULL,
    provider_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL,
    scheduled_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    notes TEXT
);
```

---

## Existing Indexes

```sql
CREATE UNIQUE INDEX appointments_pkey ON appointments (id);
CREATE INDEX idx_appointments_provider_id ON appointments (provider_id);
```

---

## Table Context

* ~12 million rows
* High write activity during business hours
* Heavy read traffic from schedule-related endpoints
* Autovacuum enabled (default configuration)

---

## EXPLAIN ANALYZE Output

```
Sort  (cost=245680.23..245681.35 rows=450 width=312)
  Sort Key: created_at DESC
  Sort Method: quicksort  Memory: 120kB
  ->  Seq Scan on appointments  (cost=0.00..245650.00 rows=450 width=312)
        Filter: (patient_id = '8821-xxxx-xxxx')
        Rows Removed by Filter: 11998450
Planning Time: 0.120 ms
Execution Time: 4825.341 ms
```

---

## Part 2 — Performance Investigation

Describe how you would approach this performance issue.

Include:

* What you believe is happening
* How you would confirm your hypothesis
* Immediate mitigations
* Safe long-term fix
* Risks of making database changes during business hours
* How you would validate improvement
* Any architectural concerns this reveals

Again, focus on structured reasoning.

---

# 🕒 3:10 PM — Incident Escalation

While investigating, the following occur:

1. A single user reports login failure.
2. Multiple users report continued slowness.
3. A background billing job has stopped processing.
4. Monitoring shows increasing memory usage in production.

---

## Part 3 — Operational Judgment

Explain how you would:

* Prioritize these incidents
* Decide what to investigate first
* Determine whether to escalate
* Balance mitigation vs deeper investigation
* Identify signals of a critical (Severity 1) incident

Demonstrate your operational thinking.

---

# 🕕 5:45 PM — Shift Handoff

Your shift is ending.
The engineering team in India will now take over.

---

# Part 4 — Reporting & Communication

## A. Internal Handoff Report

Write a structured handoff including:

* Summary of all incidents
* Timeline
* Current system status
* Confirmed and suspected root causes
* Actions taken during your shift
* Hotfixes deployed (if any)
* Remaining risks
* Clear bug reports (with suggested fixes)
* Preventative improvements (monitoring, logging, indexing, runbooks, etc.)

Write this as a professional operational report.

---

## B. Customer Communication

Now write a customer-facing update.

Include:

* What happened (non-technical explanation)
* Current status
* Whether it has been mitigated or resolved
* Impact duration (if known)
* Reassurance and next steps
* Preventative improvements underway

Tone: calm, professional, accountable.

---

# What We Are Evaluating

* Debugging maturity
* Production reasoning
* PostgreSQL troubleshooting depth
* Risk awareness
* Decision-making under pressure
* Communication quality
* Preventative systems thinking

---

Treat this as a real production day.
Clarity of thought is more important than verbosity.
