import type { DailySet, Question, Level, MockExam } from './types';
export type { DailySet, Question, Level, MockExam };

// Lazy load daily content to prevent build memory issues and circular dependencies
// Returns a Promise that resolves to the DailySet
export const dailyContent: Record<string, () => Promise<DailySet>> = {
    "test-2026-02-15": async () => (await import('./daily/test2')).dailyTest as unknown as DailySet,
    "2026-02-16": async () => (await import('./daily/20260216')).daily20260216 as unknown as DailySet,
    "2026-02-15": async () => (await import('./daily/20260215')).daily20260215 as unknown as DailySet,
    "2026-02-14": async () => (await import('./daily/20260214')).daily20260214 as unknown as DailySet,
    "2026-02-13": async () => (await import('./daily/20260213')).daily20260213 as unknown as DailySet,
    "2026-02-12": async () => (await import('./daily/20260212')).daily20260212 as unknown as DailySet,
    "2026-02-11": async () => (await import('./daily/20260211')).daily20260211 as unknown as DailySet,
    "2026-02-10": async () => (await import('./daily/20260210')).daily20260210 as unknown as DailySet,
    "2026-02-09": async () => (await import('./daily/20260209')).daily20260209 as unknown as DailySet,
    "2026-02-08": async () => (await import('./daily/20260208')).daily20260208 as unknown as DailySet,
    "2026-02-07": async () => (await import('./daily/20260207')).daily20260207 as unknown as DailySet,
    "2026-02-06": async () => (await import('./daily/20260206')).daily20260206 as unknown as DailySet,
    "2026-02-05": async () => (await import('./daily/20260205')).daily20260205 as unknown as DailySet,
    "2026-02-04": async () => (await import('./daily/20260204')).daily20260204 as unknown as DailySet,
    "2026-02-03": async () => (await import('./daily/20260203')).daily20260203 as unknown as DailySet,
    "2026-02-02": async () => (await import('./daily/20260202')).daily20260202 as unknown as DailySet,
    "2026-02-01": async () => (await import('./daily/20260201')).daily20260201 as unknown as DailySet,
};
