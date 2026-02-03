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
For each level, generate questions mapping to specific CSAT types:

### Foundation (5 Questions)
*   **Focus**: Easy Listening & Basic Reading (Types 1-17, 18-20, 25-28).
*   **Types**: 
    1.  **Listening**: Purpose, Mood, Content Match.
    2.  **Reading**: Mood/Atmosphere, Content Match (check 5->1), Practical Material.
*   **Target**: High confidence builders.

### Intermediate (5 Questions)
*   **Focus**: Logical Reading, Grammar & **Intermediate Listening**.
*   **Types**: 
    1.  **Listening (1 Question)**: Longer dialogue, complex practical situations (Types 6-10).
    2.  **Main Idea**: Topic, Title, Gist.
    3.  **Grammar/Vocab**: Contextual vocabulary, Verb forms.
    4.  **Chart/Graph**: Reading data tables/charts.
*   **Target**: Moderate complexity (~1.5 min solve time).

### Advanced (5 Questions + 1 Prime)
*   **Focus**: **Killer Types** (Types 31-39) & **High-Level Listening**.
*   **Types**:
    1.  **Listening (1 Question)**: Academic/Abstract topic or fast-paced dialogue (Types 13-17).
    2.  **Blank Inference (31-34)**: *Critical*. 3-point difficulty. Abstract concepts.
    3.  **Indirect Writing**: Order of text (36-37), Sentence Insertion (38-39).
    4.  **Prime Killer**: Ultra-hard Blank Inference or Sentence Insertion about complex topics.

### Mock Exam (5 Questions)
*   **Mix**: Create a mini-set properly distributed:
    1.  1 Listening (Foundation)
    2.  1 Grammar/Vocab (Intermediate)
    3.  1 Blank Inference (Advanced)
    4.  1 Sentence Insertion (Advanced)
    5.  1 Long Passage (41-45 style)

**Prompting Strategy**:
*   Explicitly instruct NotebookLM: "Generate a **CSAT Type 34 Blank Inference** question about [Topic]."
*   Ensure Listening scripts have realistic dialogue structure.

## 4. Implementation
1.  Create a new daily data file (e.g., `src/data/daily/2026MMDD.ts`).
2.  Format the data strictly according to the `Question` interface.
    *   **Translation Rule**: 
        *   **Questions (Instructions)**: Must be in **Korean**.
        *   **Choices**: Must be in **Korean** (unless specifically required to be English by the question type).
        *   **Explanations**: Must be in **Korean**.
        *   **Content (Passages)**: Keep in **English**.
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
