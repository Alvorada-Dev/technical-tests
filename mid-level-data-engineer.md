# Technical Assessment – Mid-Level Data Engineer

Time Limit: Max 4 hours
Submission Format: GitHub repo (or zipped folder) with code, documentation, and instructions

⸻

## Objective

You're tasked with demonstrating your ability to build a basic data pipeline and analytics foundation using real-world oil & gas data. 

⸻

## Data Sources

### Step 1: Download Required Datasets

Manually download the following public datasets and place them into a local folder (e.g., data/raw/):
	1.	U.S. Monthly Crude Oil and Natural Gas Production
	•	URL: https://www.eia.gov/petroleum/production/#oil-tab
	•	Download the Excel or CSV file under "Monthly Crude Oil and Natural Gas Production"
	•	Filter for West Virginia and Pennsylvania (if needed)
	2.	New York State Well Locations (NYSDEC)
	•	URL: https://dec.ny.gov/environmental-protection/oil-gas/wells-data-geographical-information/downloadable-data
	•	Download the CSV containing public well location data (includes lat/long, well name, county, etc.)

Note: These files should be saved in your project directory under data/raw/.

⸻

##Task Overview

Build a simple data pipeline and data model that accomplishes the following:

⸻

### Part 1 – Data Modeling & Schema Design
	•	Design a normalized schema to store:
	•	Monthly production volumes (oil/gas) by state
	•	Well metadata (ID, location, operator, status, coordinates)
	•	Write SQL DDL to define your tables (PostgreSQL, SQLite, or Snowflake-compatible)

⸻

### Part 2 – ETL Pipeline
	•	Create an ETL pipeline in Python (preferred stack: pandas, SQLAlchemy, or dbt)
	•	Ingest both datasets and load them into your schema
	•	Apply basic data cleaning:
	•	Normalize column names
	•	Convert data types (e.g., dates, integers)
	•	Remove or flag rows with missing/invalid coordinates
	•	Store the cleaned results in data/processed/ (e.g., .parquet, .csv, or load to SQLite/PostgreSQL)

⸻

### Part 3 – Analytics Queries

Provide SQL scripts to answer the following:
	1.	What was the total oil and gas production for West Virginia over the last 12 months?
	2.	Which county had the highest number of wells?
	3.	What is the average oil and gas production per well (simulate joining well data with production if needed)?
	4.	[Bonus] Provide a query to calculate year-over-year production change.

⸻

### Part 4 – Geospatial Aggregation

Using the well location dataset:
	•	Aggregate the number of wells per county
	•	Save the output as a CSV (data/processed/wells_by_county.csv)
	•	[Optional Bonus] Produce a GeoJSON file for use in map tools (data/processed/wells.geojson)

⸻

### Documentation

Provide a simple README.md with the following:
	•	Setup instructions (environment, dependencies)
	•	How to run the ETL script
	•	Where outputs are located
	•	Any assumptions you made

⸻

### Submission

Push your code to a public GitHub repository or send it as a zipped folder with:


```
├── data/
│   ├── raw/
│   └── processed/
├── etl/
│   └── pipeline.py
├── sql/
│   ├── schema.sql
│   └── analytics_queries.sql
├── geo/
│   └── wells_by_county.csv
├── README.md
```

⸻

### Evaluation Criteria
	•	Code quality and structure
	•	Use of best practices in ETL
	•	Schema normalization and efficiency
	•	Correctness and performance of queries
	•	Documentation and reproducibility
