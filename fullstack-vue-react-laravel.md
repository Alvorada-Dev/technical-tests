# Technical Assessment – Fintech Assets Explorer

## Objective
Build a **full stack** application with a **Laravel 12 + Octane** backend and a **Vue 3 + TypeScript + Inertia.js** frontend.  
The app should use the **CoinGecko public API** (no authentication required) to list and display details of cryptocurrency assets.

---

## Core Features

### Backend (Laravel 12 + Octane)
1. **List assets**  
   - `GET /api/assets`  
   - Calls:  
     ```
     GET https://api.coingecko.com/api/v3/coins/markets
     ```
     to fetch the top 10 assets with price and image.  
   - Cache results for 60 seconds to reduce API calls.

2. **Asset details**  
   - `GET /api/assets/:id`  
   - Calls:  
     ```
     GET https://api.coingecko.com/api/v3/coins/{id}
     ```
     to retrieve name, symbol, image, current price, 24h change, and other details.

3. **Favorites**  
   - `POST /api/favorites` – body: `{ "assetId": "bitcoin" }`  
   - `GET /api/favorites` – returns the list of favorites  
   - `DELETE /api/favorites/:id` – removes favorite  
   - Use SQLite for persistence

---

### Frontend (Vue 3 + TS + Inertia)
1. **Home page**  
   - Lists assets using data from `/api/assets`  
   - Button to favorite/unfavorite each asset

2. **Favorites page**  
   - Displays the list of favorite assets with the ability to remove them

3. **Asset details page**  
   - Shows name, symbol, price, 24h change, and image (via `/api/assets/:id`)

4. **Basic UX**  
   - Simple loading states, error messages, and basic responsive layout

---

## Rules
- The frontend must be served by the Laravel backend via Inertia.js  
- No authentication/login required  
- Tailwind CSS is optional  
- Must run locally without any services other than the CoinGecko API

---

## Optional Extras
1. **React component**  
   - A small isolated React widget (e.g., price sparkline chart) embedded in a Vue/Inertia page

2. **Docker**  
   - `docker-compose.yml` to run the app and database in containers

3. **Automated tests**  
   - Backend: endpoint and cache tests (Pest/PHPUnit)  
   - Frontend: component and state tests (Vitest + Testing Library)

4. **Historical chart (optional)**  
   - Use:
     ```
     GET /coins/{id}/market_chart?vs_currency=usd&days=7
     ```
     to display a chart for the last 7 days of data

---

## Submission
Submit a link to a **public GitHub repository** containing:
- Complete code (backend and frontend)  
- **README** including:
  - How to run the project
  - Main dependencies
  - Which extras (if any) were implemented

---

Good luck!