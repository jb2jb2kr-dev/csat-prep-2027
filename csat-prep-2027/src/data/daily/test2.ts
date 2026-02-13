import type { DailySet, Question } from '../types';

export const dailyTest: DailySet = {
    foundation: [] as Question[],
    intermediate: [] as Question[],
    advanced: [] as Question[],
    mock: {
        id: "m-test",
        title: "Test Mock",
        questions: [] as Question[],
        timeLimitMinutes: 10
    }
};
