import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, LayoutDashboard, History, User as UserIcon, LogOut, Users, Key, Crown } from 'lucide-react';
import { clsx } from 'clsx';
import { LoginModal } from '../components/LoginModal';
import { logout, getCurrentUser, type User } from '../utils/auth';

export const Navbar = () => {
    const location = useLocation();
    const [user, setUser] = useState<User | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginModalMode, setLoginModalMode] = useState<'login' | 'signup' | 'find_pw' | 'change_pw'>('login');

    useEffect(() => {
        setUser(getCurrentUser());
        const handleAuthChange = () => setUser(getCurrentUser());
        window.addEventListener('auth-change', handleAuthChange);
        return () => window.removeEventListener('auth-change', handleAuthChange);
    }, []);

    // Login is now handled entirely inside LoginModal
    const handleLoginSuccess = () => {
        setIsLoginModalOpen(false);
    };

    const handleLogout = () => {
        if (confirm('로그아웃 하시겠습니까?')) {
            logout();
        }
    };

    const openLoginModal = (mode: 'login' | 'signup' | 'find_pw' | 'change_pw' = 'login') => {
        setLoginModalMode(mode);
        setIsLoginModalOpen(true);
    };

    const NAV_ITEMS = [
        { label: '홈', path: '/', icon: LayoutDashboard },
        { label: '일일 학습', path: '/practice', icon: BookOpen },
        { label: '실전 모의고사', path: '/mock', icon: GraduationCap },
        { label: '기록실', path: '/history', icon: History },
        { label: '프리미엄', path: '/premium', icon: Crown },
        { label: '회원 명단', path: '/admin/users', icon: Users, adminOnly: true },
    ];

    return (
        <>
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
                initialMode={loginModalMode}
            />
            <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/20">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="w-8 h-8 text-indigo-600" />
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            CSAT Prep 2027
                        </span>
                    </div>

                    <div className="flex gap-1 items-center">
                        <div className="flex mr-4">
                            {NAV_ITEMS.map((item) => {
                                if (item.adminOnly && !user) return null; // Simple check, show for all logged in users for demo
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;

                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={clsx(
                                            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                                            isActive
                                                ? "bg-indigo-50 text-indigo-700 shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden md:inline">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="pl-4 border-l border-slate-200 ml-2">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-bold text-indigo-600 hidden sm:inline-block">
                                        {user.name}님
                                    </span>
                                    <button
                                        onClick={() => openLoginModal('change_pw')}
                                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
                                        title="비밀번호 변경"
                                    >
                                        <Key className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                                        title="로그아웃"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => openLoginModal('login')}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-all shadow-sm"
                                >
                                    <UserIcon className="w-3 h-3" /> 로그인
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
