import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dailyContent } from '../data/questions';
import type { Level } from '../data/questions';
import { QuestionCard } from '../components/QuestionCard';
import { PDFDownloadButton } from '../components/PDFDownloadButton';
import { clsx } from 'clsx';


export const PracticeMode = () => {
    const { date } = useParams<{ date: string }>();
    const [activeLevel, setActiveLevel] = useState<Level>('Foundation');

    // Use URL date or fallback to today (Hardcoded 'today' for prototype consistency, but could be new Date())
    // For now, let's keep "2026-02-02" as the default "Today" for demo purposes.
    const targetDate = date || "2026-02-03";
    const data = dailyContent[targetDate];

    if (!data) {
        return <div className="pt-32 text-center text-slate-500 font-bold text-xl">
            {targetDate}의 학습 컨텐츠가 없습니다.
        </div>;
    }

    const levels: Level[] = ['Foundation', 'Intermediate', 'Advanced'];

    // Format date for file name
    const dateStr = targetDate.replace(/-/g, '');

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        {date ? `${targetDate} 학습 기록` : "오늘의 학습"}
                    </h2>
                    <p className="text-slate-500">자신의 실력에 맞는 레벨을 선택하여 학습하세요.</p>
                </div>

                <div className="flex gap-4 items-center">
                    <PDFDownloadButton
                        targetId="printable-content"
                        fileName={`CSAT_Practice_${activeLevel}_${dateStr}`}
                        label="PDF 저장"
                    />
                    <div className="flex p-1 bg-slate-200/50 rounded-xl backdrop-blur-sm">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={clsx(
                                    "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                                    activeLevel === level
                                        ? "bg-white text-indigo-600 shadow-sm"
                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                                )}
                            >
                                {level === 'Foundation' ? '기본' : level === 'Intermediate' ? '중급' : '심화'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div id="printable-content" className="space-y-6 p-4 -m-4">
                {activeLevel === 'Foundation' && data.foundation.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
                {activeLevel === 'Intermediate' && data.intermediate.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
                {activeLevel === 'Advanced' && data.advanced.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
            </div>
        </div>
    );
};
