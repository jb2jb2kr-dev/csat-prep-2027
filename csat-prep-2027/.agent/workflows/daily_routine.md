---
description: Daily CSAT Question Generation Routine
---

# Daily CSAT Prep Generation Routine

This workflow automates the daily generation of 21 English CSAT questions, ensuring high quality, creativity, and system stability.

## 1. Environment Check
1.  **Verify NotebookLM MCP**: Ensure the NotebookLM MCP server is connected and you are logged in.
    *   Command: `uv run notebooklm-mcp-auth` (if needed to refresh)
    *   Action: Check if you can query notebooks.

## 2. Content Planning (Slow & Steady)
*   **Goal**: 21 Questions Total
    *   **Foundation**: 5 questions
    *   **Intermediate**: 5 questions
    *   **Advanced**: 5 questions + 1 **Prime Killer Question** (labeled "Prime")
    *   **Mock Exam**: 5 questions
*   **Source**: Use NotebookLM to generate creative, novel, and trendy content (e.g., AI, Environment, Future Tech).
*   **Pacing**: Generate in batches to avoid rate limits or system overload. Take your time.

## 3. Generation Process
For each level, generate questions with:
*   Passage/Dialogue (using template literals with `\n` for TTS)
*   Question
*   Choices
*   Answer
*   Detailed Explanation

**Steps:**
1.  **Generate Foundation**: Create 5 easy questions.
2.  **Generate Intermediate**: Create 5 medium questions.
3.  **Generate Advanced**: Create 5 hard questions.
4.  **Generate Prime Killer**: Create 1 extremely difficult question with high-level logic, appended to Advanced.
5.  **Generate Mock Exam**: Create 5 mixed-level questions.

## 4. Implementation
1.  Create a new daily data file (e.g., `src/data/daily/2026MMDD.ts`).
2.  Format the data strictly according to the `Question` interface.
3.  **Important**: Ensure Listening Scripts use backticks and actual newlines for proper TTS parsing.
4.  Update `src/data/questions.ts` to import and register the new daily set.

## 5. Deployment
1.  Verify the application builds: `npm run build`.
2.  Deploy to production (Vercel) via Git push:
    ```bash
    git add .
    git commit -m "feat(content): Daily questions for [Date]"
    git push
    ```
3.  Confirm live update at `https://csat-prep-2027.vercel.app/`.

---
*Note: Run this routine every morning.*
