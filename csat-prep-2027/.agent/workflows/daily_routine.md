---
description: Daily CSAT Question Generation Routine (T+2 Strategy)
---

# Daily Routine: Generate Content for T+2

This workflow defines the standard process for generating daily content.
**Key Rule:** On any given day (Day T), we generate content for Day T+2.
**Display Rule:** The website always defaults to displaying Day T (Today).

## 1. Determine Target Date
- Calculate `Target Date` = `Today + 2 days`.
- Example: If executing on **Feb 6th**, target date is **Feb 8th**.

## 2. Generate Content key
- Use `NotebookLM` to generate 21 questions (Foundation, Intermediate, Advanced, Mock).
- Ensure questions are novel and follow 2026/2027 trends.

## 3. Create Data File
- Create file: `src/data/daily/{YYYYMMDD}.ts`
- Format: Ensure strict TypeScript types (`import type { DailySet }`).

## 4. Register Data
- Import the new file in `src/data/questions.ts`.
- Add to `dailyContent` object.

## 5. Deployment
- Push changes to main branch.
- Verify Vercel deployment.
- **Check:** Navigate to `https://csat-prep-2027.vercel.app`. It should show **Today's** content by default, but the new **T+2** content should be accessible via URL `.../practice/{T+2}`.
