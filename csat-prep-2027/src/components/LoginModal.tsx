import { useState, useEffect } from 'react';
import { X, Mail, Lock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { login, register, findPassword, updatePassword } from '../utils/auth';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: () => void;
    initialMode?: Mode;
}

type Mode = 'login' | 'signup' | 'find_pw' | 'change_pw';

export const LoginModal = ({ isOpen, onClose, onLoginSuccess, initialMode = 'login' }: LoginModalProps) => {
    const [mode, setMode] = useState<Mode>(initialMode);

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
        }
    }, [isOpen, initialMode]);

    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setSchool('');
        setGrade('');
        setNewPassword('');
        setError('');
        setSuccessMsg('');
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const res = login(email, password);
        if (res.success) {
            onLoginSuccess();
            onClose();
            resetForm();
        } else {
            setError(res.message);
        }
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        const res = register({ name, email, password, phone, school, grade });
        if (res.success) {
            alert('회원가입이 완료되었습니다! 자동으로 로그인됩니다.');
            login(email, password);
            onLoginSuccess();
            onClose();
            resetForm();
        } else {
            setError(res.message);
        }
    };

    const handleFindPw = (e: React.FormEvent) => {
        e.preventDefault();
        const pw = findPassword(email, name, phone);
        if (pw) {
            setSuccessMsg(`회원님의 비밀번호는 [ ${pw} ] 입니다.`);
            setError('');
        } else {
            setError('일치하는 회원 정보를 찾을 수 없습니다.');
            setSuccessMsg('');
        }
    };

    const handleChangePw = (e: React.FormEvent) => {
        e.preventDefault();
        const res = updatePassword(email, password, newPassword);
        if (res.success) {
            alert('비밀번호가 변경되었습니다. 다시 로그인해 주세요.');
            onClose();
            // onLoginSuccess(); // Do not trigger login success as they need to re-login or stay logged in?
            // Actually usually password change doesn't require re-login, but here we update localStorage.
            // Let's just keep them logged in contextually but the modal closes.
            resetForm();
        } else {
            setError(res.message);
        }
    };

    const switchMode = (newMode: Mode) => {
        setMode(newMode);
        resetForm();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative max-h-[90vh] overflow-y-auto"
                        >
                            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 rounded-full">
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        {mode === 'login' && '로그인'}
                                        {mode === 'signup' && '회원가입'}
                                        {mode === 'find_pw' && '비밀번호 찾기'}
                                        {mode === 'change_pw' && '비밀번호 변경'}
                                    </h2>
                                    <p className="text-sm text-slate-500 mt-2">
                                        {mode === 'login' && '이메일과 비밀번호를 입력해 주세요.'}
                                        {mode === 'signup' && '필수 정보를 입력하여 가입해 주세요.'}
                                        {mode === 'find_pw' && '가입 시 입력한 정보를 입력해 주세요.'}
                                        {mode === 'change_pw' && '현재 비밀번호와 새 비밀번호를 입력해 주세요.'}
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 p-3 bg-rose-50 text-rose-600 text-sm rounded-lg flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> {error}
                                    </div>
                                )}
                                {successMsg && (
                                    <div className="mb-6 p-3 bg-emerald-50 text-emerald-600 text-sm rounded-lg flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> {successMsg}
                                    </div>
                                )}

                                {/* LOGIN FORM */}
                                {mode === 'login' && (
                                    <form onSubmit={handleLogin} className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                                                <input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" required />
                                            </div>
                                            <div className="relative">
                                                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                                                <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" required />
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex justify-center items-center gap-2">
                                            로그인 <ArrowRight className="w-5 h-5" />
                                        </button>
                                        <div className="flex justify-between text-sm text-slate-500 pt-2">
                                            <button type="button" onClick={() => switchMode('signup')} className="hover:text-indigo-600 font-medium">회원가입</button>
                                            <button type="button" onClick={() => switchMode('find_pw')} className="hover:text-slate-800">비밀번호 찾기</button>
                                        </div>
                                    </form>
                                )}

                                {/* SIGNUP FORM */}
                                {mode === 'signup' && (
                                    <form onSubmit={handleSignup} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <input type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                            <input type="text" placeholder="전화번호" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        </div>
                                        <input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <div className="grid grid-cols-2 gap-3">
                                            <input type="text" placeholder="학교" value={school} onChange={e => setSchool(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                            <input type="text" placeholder="학년" value={grade} onChange={e => setGrade(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        </div>
                                        <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                                            가입하기
                                        </button>
                                        <div className="text-center">
                                            <button type="button" onClick={() => switchMode('login')} className="text-sm text-slate-500 hover:text-indigo-600">
                                                이미 계정이 있으신가요? 로그인
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* FIND PASSWORD FORM */}
                                {mode === 'find_pw' && (
                                    <form onSubmit={handleFindPw} className="space-y-4">
                                        <input type="email" placeholder="가입한 이메일" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <input type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <input type="text" placeholder="전화번호" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />

                                        <button type="submit" className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                                            비밀번호 찾기
                                        </button>
                                        <div className="text-center">
                                            <button type="button" onClick={() => switchMode('login')} className="text-sm text-slate-500 hover:text-indigo-600">
                                                로그인 화면으로 돌아가기
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* CHANGE PASSWORD FORM */}
                                {mode === 'change_pw' && (
                                    <form onSubmit={handleChangePw} className="space-y-4">
                                        <input type="email" placeholder="이메일 (ID)" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <input type="password" placeholder="현재 비밀번호" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />
                                        <input type="password" placeholder="새 비밀번호" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200" required />

                                        <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                                            비밀번호 변경하기
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
