# Technical Assessment – Senior Full-Stack Developer (Fintech)

## Context
You're applying for a senior full-stack developer position at a fast-moving fintech startup. This assessment evaluates your ability to quickly ship functional features using our core stack while demonstrating clean code practices and modern development workflows.

**Time expectation: 4 hours for core features** (bonus features optional)

---

## Stack
**Next.js 14+ (App Router) + React + TypeScript + Supabase + CoinGecko API**

---

## What to Build

A cryptocurrency assets explorer with essential functionality.

### Backend (Next.js API Routes + Supabase)

#### Required APIs
1. **GET /api/assets**
   - Fetch top 10 cryptocurrencies from CoinGecko:
     ```
     GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1
     ```
   - Return: id, name, symbol, image, current_price, price_change_percentage_24h
   - Implement 60-second cache (Next.js cache or in-memory)

2. **GET /api/favorites**
   - Fetch all favorites from Supabase
   - Return array of favorite assets

3. **POST /api/favorites**
   - Body: `{ "asset_id": "bitcoin" }`
   - Save to Supabase

**Supabase Schema:**
```sql
create table favorites (
  id uuid default uuid_generate_v4() primary key,
  asset_id text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

---

### Frontend (React + Next.js + TypeScript)

#### 1. Home Page (`/`)
Display top 10 crypto assets with:
- Logo image
- Name & symbol
- Current price (formatted as currency)
- 24h change percentage (green ↑ / red ↓)
- Favorite button (heart icon or similar)
- Basic loading spinner
- Mobile responsive layout

#### 2. Favorites Page (`/favorites`)
Display favorited assets with:
- Same card layout as home
- Remove from favorites button
- Empty state message ("No favorites yet")
- Basic error handling

---

## Core Requirements

### Must Have ✅
- TypeScript (basic typing is fine, `any` acceptable if needed for speed)
- Mobile responsive (works on 375px+ and desktop)
- CoinGecko API integration working
- Supabase connected and persisting favorites
- Clean, functional UI (Tailwind or simple CSS)
- README with setup instructions
- `.env.example` file

### Keep It Simple ⚡
- Inline components are fine (no over-engineering)
- Simple loading states (spinner or text)
- Basic error handling (generic messages ok)
- No details page required (just list and favorites)
- Simple commit messages (don't need to be super granular)
- Focus on functionality over perfection

### What Success Looks Like
At the 4-hour mark, you should have:
- ✅ A working app that fetches and displays crypto data
- ✅ Add/view favorites functionality working end-to-end
- ✅ Responsive layout that doesn't break on mobile
- ✅ Clear README explaining how to run it
- ✅ Code that's organized and readable

---

## Bonus Features

### Polish
- **Details page** `/assets/[id]` with:
  - Full asset information
  - Market cap, 24h volume, description
  - Add/remove favorite from details
- **Better loading states**: Skeletons instead of spinners
- **Smooth animations**: Framer Motion or CSS transitions
- **Error states**: Retry buttons, helpful messages
- **Dark mode toggle**: With system preference detection

### Advanced Features
- **DELETE /api/favorites/[id]** with optimistic UI updates
- **Historical chart**: 7-day price chart using:
  ```
  GET https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=usd&days=7
  ```
  (Use Recharts, Chart.js, or similar)
- **Search/filter**: Find specific assets
- **Infinite scroll**: Load more than 10 assets with pagination
- **Performance**: Document Lighthouse scores (90+ target)

### Production Ready
- **Automated tests**:
  - Jest + React Testing Library (components, hooks)
  - API integration tests
  - Playwright/Cypress E2E for critical flows
  - 70%+ coverage on core features
- **TypeScript strict mode**: No `any` types, proper interfaces
- **Docker setup**: `docker-compose.yml` for Next.js + Supabase
- **CI/CD pipeline**: GitHub Actions (lint, test, build)
- **React Native preview**: Basic mobile screen consuming the API

### 🤖 AI-Assisted Development (Always Welcome!)
Document in your README:
- Which AI tools you used (Cursor, Claude Code, GitHub Copilot, etc.)
- Specific examples where AI accelerated your work
- Tasks where you chose manual approach over AI
- Your workflow combining AI with code review
- Estimated productivity impact

**We love seeing how you leverage modern tools while maintaining quality!**

---

## Submission

### Minimum to Submit
- Public GitHub repository
- Working home page with crypto list
- Working favorites page
- Add/view favorites in Supabase
- README with:
  - How to run
  - Required environment variables
  - Features implemented (core + any bonus)
