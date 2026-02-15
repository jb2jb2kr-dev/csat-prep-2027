
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
        type: 'bar' | 'pie' | 'line';
        title: string;
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            color?: string;
        }[];
        unit?: string;
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
