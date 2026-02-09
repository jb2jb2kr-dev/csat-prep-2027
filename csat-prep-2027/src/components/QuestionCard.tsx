import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle, Headphones, PlayCircle, StopCircle } from 'lucide-react';
import { clsx } from 'clsx';
import type { Question } from '../data/questions';
import { playDialogue } from '../utils/tts';

interface QuestionCardProps {
    question: Question;
    questionNumber?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const isAnswered = selectedAnswer !== null;

    const stopAudio = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
    };

    const toggleAudio = () => {
        if (isPlaying) {
            stopAudio();
            return;
        }

        if (!question.content) return;

        // Use the new multi-voice utility
        playDialogue(
            question.content,
            () => setIsPlaying(true),
            () => setIsPlaying(false),
            () => setIsPlaying(false),
            playbackRate
        );
    };

    return (
        <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
                {questionNumber && (
                    <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-sm">
                        {questionNumber}
                    </span>
                )}
                <span className={clsx(
                    "px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
                    question.level === 'Foundation' && "bg-emerald-100 text-emerald-700",
                    question.level === 'Intermediate' && "bg-blue-100 text-blue-700",
                    question.level === 'Advanced' && "bg-purple-100 text-purple-700",
                )}>
                    {question.level}
                </span>

                {(question.id.includes('prime') || question.type.toLowerCase().includes('killer') || question.type.toLowerCase().includes('prime')) && (
                    <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-rose-600 text-white shadow-sm flex items-center gap-1 animate-pulse">
                        🔥 PRIME
                    </span>
                )}

                <span className="text-slate-500 text-sm font-medium flex items-center gap-1">
                    {question.isListening && <Headphones className="w-4 h-4 text-indigo-500" />}
                    {question.type}
                </span>
            </div>

            {/* Content Area */}
            <div className="mb-8">
                {question.isListening ? (
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-col items-center gap-2 no-print">
                            <span className="text-sm font-medium text-slate-500">배속 설정 (Speed)</span>
                            <div className="flex bg-slate-200 rounded-lg p-1 gap-1">
                                {[0.8, 1.0, 1.2].map((rate) => (
                                    <button
                                        key={rate}
                                        onClick={() => {
                                            setPlaybackRate(rate);
                                            if (isPlaying) stopAudio(); // Stop if changing speed while playing
                                        }}
                                        className={clsx(
                                            "px-3 py-1 rounded-md text-sm font-semibold transition-all",
                                            playbackRate === rate
                                                ? "bg-white text-indigo-600 shadow-sm"
                                                : "text-slate-600 hover:text-slate-900"
                                        )}
                                    >
                                        x{rate}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-center text-slate-500 mb-2">
                            <span className="text-sm font-medium">오디오를 듣고 문제를 풀어보세요</span>
                        </div>
                        <button
                            onClick={toggleAudio}
                            className={clsx(
                                "flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg transition-all shadow-md group no-print",
                                isPlaying
                                    ? "bg-rose-100 text-rose-600 hover:bg-rose-200"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
                            )}
                        >
                            {isPlaying ? <StopCircle className="w-6 h-6 fill-current" /> : <PlayCircle className="w-6 h-6" />}
                            {isPlaying ? '재생 중지 (Stop)' : '듣기 재생 (Play)'}
                        </button>
                    </div>
                ) : (
                    <div>
                        {question.chartData && (
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                                <h4 className="text-center font-bold text-slate-700 mb-6">{question.chartData.title}</h4>
                                <div className="space-y-4">
                                    {question.chartData.items.map((item, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="flex justify-between text-sm font-medium text-slate-600 mb-1">
                                                <span>{item.label}</span>
                                                <span>{item.value}{item.unit}</span>
                                            </div>
                                            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.value}%` }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                                                    className={clsx("h-full rounded-full", item.color || "bg-indigo-500")}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <p className="text-lg text-slate-800 leading-relaxed font-medium whitespace-pre-wrap border-l-4 border-slate-200 pl-4">
                            {question.content}
                        </p>
                    </div>
                )}
            </div>

            {/* Question Text */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">
                {question.question}
            </h3>

            <div className="space-y-3">
                {question.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => !isAnswered && setSelectedAnswer(index)}
                        disabled={isAnswered}
                        className={clsx(
                            "w-full text-left p-4 rounded-xl transition-all duration-200 border-2 flex items-center justify-between group",
                            !isAnswered && "hover:border-indigo-200 hover:bg-slate-50 border-transparent bg-slate-50/50",
                            isAnswered && index === question.answer && "border-emerald-500 bg-emerald-50 text-emerald-900",
                            isAnswered && index === selectedAnswer && index !== question.answer && "border-rose-500 bg-rose-50 text-rose-900",
                            isAnswered && index !== question.answer && index !== selectedAnswer && "opacity-50 border-transparent"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            <span className={clsx(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                                !isAnswered && "bg-white text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 shadow-sm",
                                isAnswered && index === question.answer && "bg-emerald-200 text-emerald-700",
                                isAnswered && index === selectedAnswer && index !== question.answer && "bg-rose-200 text-rose-700",
                                isAnswered && index !== question.answer && index !== selectedAnswer && "bg-slate-100 text-slate-400"
                            )}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            {choice}
                        </span>

                        {isAnswered && index === question.answer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        )}
                        {isAnswered && index === selectedAnswer && index !== question.answer && (
                            <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {isAnswered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 pt-6 border-t border-slate-200"
                    >
                        <div className="flex items-start gap-3 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
                            <HelpCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-indigo-900 mb-2">정답 및 해설</h4>
                                <p className="text-indigo-800/80 leading-relaxed text-sm mb-4">
                                    {question.explanation}
                                </p>
                                {question.isListening && (
                                    <div className="mt-4 pt-4 border-t border-indigo-200/50">
                                        <h5 className="font-semibold text-indigo-900 text-xs uppercase tracking-wider mb-2">Script</h5>
                                        <p className="text-slate-600 text-sm whitespace-pre-wrap font-mono bg-white/50 p-3 rounded-lg">
                                            {question.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};
