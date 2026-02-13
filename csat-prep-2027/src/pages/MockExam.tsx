import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timer, CheckCircle, AlertCircle, PlayCircle, StopCircle, ChevronLeft, ChevronRight, Calendar, Loader2 } from 'lucide-react';
import { dailyContent } from '../data/questions';
import type { MockExam as MockExamData } from '../data/questions';
import { PDFDownloadButton } from '../components/PDFDownloadButton';
import { saveExamResult } from '../utils/storage';
import { playDialogue } from '../utils/tts';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const MockExam = () => {
    const { date } = useParams<{ date: string }>();
    const navigate = useNavigate();
    const [examState, setExamState] = useState<'intro' | 'active' | 'finished'>('intro');
    const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes for mini mock
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [mockData, setMockData] = useState<MockExamData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Use URL date or fallback to the latest available date in dailyContent
    const getLatestDateStr = () => {
        const dates = Object.keys(dailyContent)
            .filter(key => key.match(/^\d{4}-\d{2}-\d{2}$/)) // Only valid date formats
            .sort((a, b) => b.localeCompare(a));
        return dates[0] || new Date().toISOString().split('T')[0];
    };
    const targetDate = date || getLatestDateStr();

    const handleDateChange = (days: number) => {
        const currentDateObj = new Date(targetDate);
        currentDateObj.setDate(currentDateObj.getDate() + days);

        const year = currentDateObj.getFullYear();
        const month = String(currentDateObj.getMonth() + 1).padStart(2, '0');
        const day = String(currentDateObj.getDate()).padStart(2, '0');
        const newDateStr = `${year}-${month}-${day}`;

        navigate(`/mock/${newDateStr}`);
    };

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            setIsLoading(true);
            try {
                // Check if the date exists in our data source
                const loader = dailyContent[targetDate];

                if (loader) {
                    // console.log(`Loading mock data for ${targetDate}...`);
                    const content = await loader();

                    if (isMounted) {
                        setMockData(content.mock);
                        // console.log(`Mock data loaded for ${targetDate}`);
                    }
                } else {
                    console.warn(`No mock data found for ${targetDate}`);
                    if (isMounted) {
                        setMockData(null);
                    }
                }
            } catch (error) {
                console.error(`Failed to load mock data for ${targetDate}:`, error);
                if (isMounted) {
                    setMockData(null);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, [targetDate]);

    useEffect(() => {
        // Optional: Check if already completed? 
        // For now, we allow retaking or just start fresh. 
        // Could be improved to show "Resume" or "View Result"
    }, []);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (examState === 'active' && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && examState === 'active') {
            finishExam();
        }
        return () => clearInterval(timer);
    }, [examState, timeLeft]);

    const startExam = () => {
        setExamState('active');
        setTimeLeft(mockData?.timeLimitMinutes ? mockData.timeLimitMinutes * 60 : 1200);
    };

    const finishExam = () => {
        setExamState('finished');
        if (mockData) {
            let correct = 0;
            mockData.questions.forEach(q => {
                if (answers[q.id] === q.answer) correct++;
            });
            const score = Math.round((correct / mockData.questions.length) * 100);

            saveExamResult({
                date: targetDate,
                score,
                totalQuestions: mockData.questions.length,
                correctCount: correct,
                answers,
                completedAt: new Date().toISOString()
            });
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const calculateScore = () => {
        if (!mockData) return 0;
        let correct = 0;
        mockData.questions.forEach(q => {
            if (answers[q.id] === q.answer) correct++;
        });
        return Math.round((correct / mockData.questions.length) * 100);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex justify-center items-center">
                <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
            </div>
        );
    }

    if (!mockData) return <div className="pt-32 text-center text-slate-500 font-bold text-xl">{targetDate} 모의고사 데이터가 없습니다.</div>;

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
            {examState === 'intro' && (
                <div className="text-center pt-12">
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center bg-white rounded-full shadow-sm border border-slate-200 px-1 py-1">
                            <button
                                onClick={() => handleDateChange(-1)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-emerald-600 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={targetDate}
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            navigate(`/mock/${e.target.value}`);
                                        }
                                    }}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <span className="mx-3 text-sm font-semibold text-slate-600 flex items-center gap-2 min-w-[120px] justify-center cursor-pointer hover:bg-slate-50 py-1 px-2 rounded-lg transition-colors">
                                    <Calendar className="w-4 h-4 text-emerald-500" />
                                    {targetDate}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDateChange(1)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-emerald-600 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 mb-8">
                        <Timer className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{mockData.title}</h2>
                    <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
                        실제 수능과 동일한 환경을 시뮬레이션합니다.<br />
                        총 {mockData.questions.length}문항, 제한 시간 {mockData.timeLimitMinutes}분.<br />
                        준비가 되셨다면 시작 버튼을 눌러주세요.
                    </p>
                    <button
                        onClick={startExam}
                        className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all"
                    >
                        시험 시작하기
                    </button>
                </div>
            )}

            {examState === 'active' && (
                <div>
                    <header className="fixed top-16 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-white/20 z-40 h-16 flex items-center justify-center shadow-sm">
                        <div className="flex items-center gap-2 text-2xl font-bold font-mono text-emerald-600">
                            <Timer className="w-6 h-6" />
                            {formatTime(timeLeft)}
                        </div>
                        <div className="absolute right-6">
                            <PDFDownloadButton
                                targetId="mock-exam-paper"
                                fileName={`MockExam_${mockData?.title?.replace(/\s+/g, '_')}`}
                                label="시험지 인쇄"
                                className="bg-emerald-600 hover:bg-emerald-700"
                            />
                        </div>
                    </header>
                    <div id="mock-exam-paper" className="pt-8 space-y-12 pb-24">
                        {mockData.questions.map((q, idx) => (
                            <div key={q.id} id={`q-${q.id}`} className="scroll-mt-32">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                        {q.isListening ? '듣기 평가' : '독해 영역'} | {q.type}
                                    </span>
                                </div>
                                {/* Simplified Render for Exam Mode (No answer feedback yet) */}
                                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                    {q.isListening && (
                                        <div className="mb-6 p-4 bg-indigo-50 rounded-lg text-indigo-800 text-sm flex items-center justify-between border border-indigo-100">
                                            <div className="flex items-center gap-2">
                                                <PlayCircle className="w-5 h-5" />
                                                <span>음성 안내를 듣고 문제를 풀어주세요.</span>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    if (window.speechSynthesis.speaking) {
                                                        window.speechSynthesis.cancel();
                                                    } else {
                                                        playDialogue(q.content);
                                                    }
                                                }}
                                                className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 shadow-sm flex items-center gap-1 transition-all active:scale-95"
                                            >
                                                <PlayCircle className="w-3 h-3" /> 재생 / <StopCircle className="w-3 h-3" /> 중지
                                            </button>
                                        </div>
                                    )}
                                    {!q.isListening && (
                                        <div>
                                            {q.chartData && (
                                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                                                    <h4 className="text-center font-bold text-slate-700 mb-6">{q.chartData.title}</h4>
                                                    <div className="space-y-4">
                                                        {q.chartData.items.map((item, idx) => (
                                                            <div key={idx} className="relative">
                                                                <div className="flex justify-between text-sm font-medium text-slate-600 mb-1">
                                                                    <span>{item.label}</span>
                                                                    <span>{item.value}{item.unit}</span>
                                                                </div>
                                                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        whileInView={{ width: `${item.value}%` }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                                                                        className={clsx("h-full rounded-full", item.color || "bg-indigo-500")}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <p className="text-lg text-slate-800 leading-relaxed whitespace-pre-wrap mb-6">
                                                {q.content}
                                            </p>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">{q.question}</h3>
                                    <div className="space-y-3">
                                        {q.choices.map((choice, cIdx) => (
                                            <button
                                                key={cIdx}
                                                onClick={() => setAnswers(prev => ({ ...prev, [q.id]: cIdx }))}
                                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${answers[q.id] === cIdx
                                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                                                    : 'border-transparent bg-slate-50 hover:bg-slate-100'
                                                    }`}
                                            >
                                                <span className="mr-3 font-bold text-slate-400">{cIdx + 1}.</span> {choice}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 border-t border-slate-200 backdrop-blur-md flex justify-center z-40">
                        <button
                            onClick={finishExam}
                            className="px-12 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
                        >
                            답안 제출 및 종료
                        </button>
                    </div>
                </div>
            )}

            {examState === 'finished' && (
                <div className="pt-12 text-center">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <div className="inline-block p-2 bg-indigo-50 rounded-full mb-6">
                            <CheckCircle className="w-16 h-16 text-indigo-600" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">시험 종료!</h2>
                        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                            {calculateScore()}점
                        </div>
                        <p className="text-slate-500 mb-12">총 {mockData.questions.length}문제 중 {Object.keys(answers).filter(id => answers[id] === mockData.questions.find(q => q.id === id)?.answer).length}문제를 맞혔습니다.</p>

                        <div className="text-left max-w-3xl mx-auto space-y-8">
                            <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">오답 노트 및 해설</h3>
                            {mockData.questions.map((q, idx) => {
                                const isCorrect = answers[q.id] === q.answer;
                                if (isCorrect) return null; // Show only wrong answers or all? Let's show all but highlight wrong.

                                return (
                                    <div key={q.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                                        <div className={`absolute top-0 left-0 w-1 h-full ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="font-bold text-slate-500">#{idx + 1}</span>
                                            {isCorrect ? (
                                                <span className="text-emerald-600 text-sm font-bold flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 정답</span>
                                            ) : (
                                                <span className="text-rose-600 text-sm font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4" /> 오답 (선택: {answers[q.id] + 1})</span>
                                            )}
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{q.question}</h4>
                                        <div className="text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg overflow-y-auto max-h-32">
                                            <div className="font-bold text-slate-400 mb-1 text-xs uppercase">Content/Script</div>
                                            {q.content}
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-900">
                                            <span className="font-bold block mb-1">정답 및 해설:</span>
                                            {q.explanation} (정답: {q.answer + 1}번)
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="mt-12 px-8 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all"
                        >
                            홈으로 돌아가기
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
