import { Link } from 'react-router-dom';
import { dailyContent } from '../data/questions';
import { Calendar, ChevronRight } from 'lucide-react';
import { getAllExamResults } from '../utils/storage';

export const History = () => {
    // Get all available dates and sort them descending (newest first)
    const dates = Object.keys(dailyContent).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    const results = getAllExamResults();

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-indigo-600" />
                학습 기록 (Archive)
            </h2>

            <div className="grid gap-4">
                {dates.length === 0 ? (
                    <div className="text-center text-slate-500 py-12">저장된 학습 기록이 없습니다.</div>
                ) : (
                    dates.map((date) => {
                        const result = results[date];
                        return (
                            <div key={date} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${result ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
                                        {new Date(date).getDate()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">
                                            {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
                                        </h3>
                                        {result ? (
                                            <p className="text-sm text-emerald-600 font-bold">
                                                모의고사 점수: {result.score}점 ({result.correctCount}/{result.totalQuestions})
                                            </p>
                                        ) : (
                                            <p className="text-sm text-slate-500 font-medium">
                                                학습 시작하기
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        to={`/practice/${date}`}
                                        className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 text-sm font-semibold transition-colors"
                                    >
                                        일일 학습
                                    </Link>
                                    <Link
                                        to={`/mock/${date}`}
                                        className={`px-4 py-2 border rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${result
                                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'
                                            : 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100'
                                            }`}
                                    >
                                        {result ? '성적 확인' : '모의고사'} <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
