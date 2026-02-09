import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dailyContent } from '../data/questions';
import type { Level } from '../data/questions';
import { QuestionCard } from '../components/QuestionCard';
import { PDFDownloadButton } from '../components/PDFDownloadButton';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';


export const PracticeMode = () => {
    const { date } = useParams<{ date: string }>();
    const navigate = useNavigate();
    const [activeLevel, setActiveLevel] = useState<Level>('Foundation');

    // Use URL date or fallback to the latest available date in dailyContent
    const getLatestDateStr = () => {
        const dates = Object.keys(dailyContent).sort((a, b) => b.localeCompare(a));
        console.log('Available dates:', dates);
        const latest = dates[0] || new Date().toISOString().split('T')[0];
        console.log('Latest date selected:', latest);
        return latest;
    };
    const targetDate = date || getLatestDateStr();
    console.log('Target date:', targetDate);
    const data = dailyContent[targetDate];
    console.log('Data for target date exists:', !!data);

    // Date Navigation Logic
    const handleDateChange = (days: number) => {
        const currentDateObj = new Date(targetDate);
        currentDateObj.setDate(currentDateObj.getDate() + days);

        const year = currentDateObj.getFullYear();
        const month = String(currentDateObj.getMonth() + 1).padStart(2, '0');
        const day = String(currentDateObj.getDate()).padStart(2, '0');
        const newDateStr = `${year}-${month}-${day}`;

        navigate(`/practice/${newDateStr}`);
    };

    const levels: Level[] = ['Foundation', 'Intermediate', 'Advanced'];

    // Format date for file name
    const dateStr = targetDate.replace(/-/g, '');

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto">
            {/* Header Area with Date Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 no-print">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-3xl font-bold text-slate-900">
                            오늘의 학습
                        </h2>
                        <div className="flex items-center bg-white rounded-full shadow-sm border border-slate-200 px-1 py-1">
                            <button
                                onClick={() => handleDateChange(-1)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={targetDate}
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            navigate(`/practice/${e.target.value}`);
                                        }
                                    }}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <span className="mx-3 text-sm font-semibold text-slate-600 flex items-center gap-2 min-w-[120px] justify-center cursor-pointer hover:bg-slate-50 py-1 px-2 rounded-lg transition-colors">
                                    <Calendar className="w-4 h-4 text-indigo-500" />
                                    {targetDate}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDateChange(1)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <p className="text-slate-500">자신의 실력에 맞는 레벨을 선택하여 학습하세요.</p>
                </div>

                <div className="flex gap-4 items-center">
                    {data && (
                        <PDFDownloadButton
                            targetId="printable-content"
                            fileName={`CSAT_Practice_${activeLevel}_${dateStr}`}
                            label="PDF 저장"
                        />
                    )}
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

            {/* Content Area */}
            {!data ? (
                <div className="py-32 text-center rounded-3xl bg-white/50 border border-slate-200 border-dashed">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <Calendar className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{targetDate} 학습 컨텐츠 준비 중</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                        아직 해당 날짜의 문제가 등록되지 않았습니다.<br />
                        다른 날짜를 선택해 주세요.
                    </p>
                </div>
            ) : (
                <div id="printable-content" className="space-y-6 p-4 -m-4">
                    {activeLevel === 'Foundation' && data.foundation.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
                    {activeLevel === 'Intermediate' && data.intermediate.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
                    {activeLevel === 'Advanced' && data.advanced.map((q, idx) => <QuestionCard key={q.id} question={q} questionNumber={idx + 1} />)}
                </div>
            )}
        </div>
    );
};
