import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Target } from 'lucide-react';

export const Home = () => {
    const currentDate = new Date().toLocaleDateString('ko-KR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto pt-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide mb-6 border border-indigo-100">
                        {currentDate}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        2027 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">수능 영어</span> 완벽 대비
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        AI가 매일 제공하는 수준별 맞춤형 문제로<br />
                        기초부터 심화까지 논리적 사고력을 키워보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <Link to="/practice" className="group relative overflow-hidden rounded-3xl p-8 glass-card border-l-4 border-l-indigo-500 hover:border-l-indigo-600 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-32 h-32 text-indigo-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">오늘의 학습 (Daily Practice)</h3>
                            <p className="text-slate-500 mb-6">매일 제공되는 수준별(기초/중급/심화) 50문제</p>
                            <span className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                                학습 시작하기 <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                        </div>
                    </Link>

                    <Link to="/mock" className="group relative overflow-hidden rounded-3xl p-8 glass-card border-l-4 border-l-emerald-500 hover:border-l-emerald-600 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Clock className="w-32 h-32 text-emerald-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">실전 모의고사 (Mock Exam)</h3>
                            <p className="text-slate-500 mb-6">25문제 / 35분 풀세트 시뮬레이션 및 성적 분석</p>
                            <span className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                                모의고사 응시하기 <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-white/40 border border-white/40">
                        <div className="text-3xl font-bold text-slate-900 mb-1">D-152</div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">수능까지 남은 시간</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/40 border border-white/40">
                        <div className="text-3xl font-bold text-slate-900 mb-1">1,240</div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">학습 중인 수험생</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/40 border border-white/40">
                        <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">사용자 만족도</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
