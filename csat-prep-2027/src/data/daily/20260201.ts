import type { DailySet, Question } from '../types';

export const daily20260201: DailySet = {
    foundation: [
        {
            id: "old-f-1",
            level: "Foundation",
            type: "Review",
            isListening: false,
            content: "Keep your face always toward the sunshine and shadows will fall behind you.",
            question: "위 명언의 핵심 의미는?",
            choices: ["긍정적인 태도를 가져라", "태양열 에너지를 사용해라", "그림자를 두려워하라", "뒤를 돌아보지 마라", "건강을 위해 산책해라"],
            answer: 0,
            explanation: "항상 밝은 면(sunshine)을 보라는 것은 긍정적인 태도를 강조하는 것입니다."
        }
    ] as Question[],
    intermediate: [] as Question[],
    advanced: [] as Question[],
    mock: {
        id: "mock-old-1",
        title: "지난 실전 모의고사 (Review)",
        timeLimitMinutes: 10,
        questions: []
    }
};
