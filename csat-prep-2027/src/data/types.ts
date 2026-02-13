
export type Level = 'Foundation' | 'Intermediate' | 'Advanced';

export interface Question {
    id: string;
    level: Level;
    type: string;
    content: string; // Used for Reading passages OR Listening Scripts
    isListening?: boolean;
    question: string;
    choices: string[];
    answer: number;
    chartData?: {
        type: 'bar' | 'pie';
        title: string;
        items: { label: string; value: number; unit?: string; color?: string }[];
    };
    explanation: string;
}

export interface MockExam {
    id: string;
    title: string;
    questions: Question[];
    timeLimitMinutes: number;
}

export interface DailySet {
    foundation: Question[];
    intermediate: Question[];
    advanced: Question[];
    mock: MockExam;
}
