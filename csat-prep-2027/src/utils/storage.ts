export interface ExamResult {
    date: string;
    score: number;
    totalQuestions: number;
    correctCount: number;
    answers: Record<string, number>;
    completedAt: string;
}

const STORAGE_KEY = 'csat_exam_results';

export const saveExamResult = (result: ExamResult) => {
    const results = getAllExamResults();
    results[result.date] = result;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
};

export const getExamResult = (date: string): ExamResult | null => {
    const results = getAllExamResults();
    return results[date] || null;
};

export const getAllExamResults = (): Record<string, ExamResult> => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (e) {
        console.error('Failed to parse exam results', e);
        return {};
    }
};
