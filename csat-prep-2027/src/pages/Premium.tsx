import PayPalButton from '../components/PayPalButton';
import { CheckCircle2, Crown } from 'lucide-react';

export const Premium = () => {
    const handleSuccess = (details: any) => {
        alert(`결제가 완료되었습니다! 감사합니니다, ${details.payer.name.given_name}님.`);
        // 여기서 서버로 결제 정보를 보내 사용자 등급을 업데이트하는 로직을 추가할 수 있습니다.
    };

    const handleError = (_err: any) => {
        alert('결제 중 오류가 발생했습니다. 다시 시도해 주세요.');
    };

    const tiers = [
        {
            name: 'Basic',
            price: 'Free',
            features: ['일일 학습 50문제', '기록실 확인', '기본 성적 분석'],
            isPremium: false,
        },
        {
            name: 'Premium',
            price: '9.99',
            features: ['무제한 모의고사', 'AI 상세 오답 노트', 'PDF 다운로드 (워터마크 제거)', '광고 제거'],
            isPremium: true,
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <Crown className="w-10 h-10 text-amber-500" />
                        프리미엄 멤버십
                    </h1>
                    <p className="text-lg text-slate-500">더 효과적인 학습을 위해 최고의 도구를 사용해보세요.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`p-8 rounded-3xl glass-card border-2 transition-all ${tier.isPremium ? 'border-indigo-500 ring-4 ring-indigo-500/10 scale-105 shadow-xl bg-white' : 'border-slate-200'}`}>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                                    <div className="mt-2">
                                        <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                                        {tier.isPremium && <span className="text-slate-500 ml-1">/ Month</span>}
                                    </div>
                                </div>
                                {tier.isPremium && (
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                        Best Choice
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-600">
                                        <CheckCircle2 className={`w-5 h-5 ${tier.isPremium ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {tier.isPremium ? (
                                <PayPalButton
                                    amount={tier.price}
                                    onSuccess={handleSuccess}
                                    onError={handleError}
                                />
                            ) : (
                                <button disabled className="w-full py-4 rounded-xl font-bold bg-slate-100 text-slate-400 cursor-not-allowed">
                                    현재 이용 중
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
