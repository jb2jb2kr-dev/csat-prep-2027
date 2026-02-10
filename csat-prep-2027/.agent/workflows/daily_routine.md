---
description: 일일 수능 영어 문제 생성 루틴 (T+2 전략)
---

# 일일 루틴: T+2일자 콘텐츠 생성

이 워크플로우는 일일 콘텐츠 생성을 위한 표준 절차를 정의합니다.
**핵심 규칙:** 특정 날짜(Day T)에 우리는 2일 뒤(Day T+2)의 콘텐츠를 생성합니다.
**표시 규칙:** 웹사이트는 항상 오늘(Day T)의 콘텐츠를 기본으로 표시합니다.

## 1. 목표 날짜 결정 (Determine Target Date)

- `목표 날짜` = `오늘 + 2일`로 계산합니다.
- 예시: **2월 6일**에 실행하는 경우, 목표 날짜는 **2월 8일**입니다.

## 2. 콘텐츠 생성 (Generate Content)

- `NotebookLM`을 사용하여 21개의 문제(기초, 중급, 고급, 실전 모의고사)를 생성합니다.
- 문제가 참신하고 2026/2027년 트렌드를 따르도록 합니다.
- **중요 규칙:** `.agent/prompts/csat_rules.md`에 정의된 혼합 언어 규칙을 준수하십시오. 질문은 한국어, 선택지는 유형에 따라 한국어/영어로 작성해야 합니다.

## 3. 데이터 파일 생성 (Create Data File)

- 파일 생성: `src/data/daily/{YYYYMMDD}.ts`
- 형식: 엄격한 TypeScript 타입(`import type { DailySet }`)을 준수합니다.

## 4. 데이터 등록 (Register Data)

- `src/data/questions.ts` 파일에 새 파일을 import 합니다.
- `dailyContent` 객체에 추가합니다.

## 5. 배포 (Deployment)

- 변경 사항을 `main` 브랜치에 푸시합니다.
- Vercel 배포를 확인합니다.
- **확인:** `https://csat-prep-2027.vercel.app`에 접속하여 확인합니다. 기본적으로 **오늘 자** 콘텐츠가 보여야 하지만, 새로운 **T+2일자** 콘텐츠는 URL `.../practice/{T+2}`를 통해 접근 가능해야 합니다.
