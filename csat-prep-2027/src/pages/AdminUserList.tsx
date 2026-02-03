import { useState, useEffect } from 'react';
import { getAllUsers, type User } from '../utils/auth';
import { ArrowLeft, Search, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminUserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setUsers(getAllUsers());
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.school.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "이름,이메일,전화번호,학교,학년,가입일\n"
            + users.map(u => `${u.name},${u.email},${u.phone},${u.school},${u.grade},${u.joinedAt}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "csat_users.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-4 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> 홈으로 돌아가기
                        </Link>
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                            <UsersIcon className="w-8 h-8 text-indigo-600" />
                            회원 명단 관리
                        </h1>
                        <p className="text-slate-500 mt-2">총 {users.length}명의 회원이 등록되어 있습니다.</p>
                    </div>
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all font-medium"
                    >
                        <Download className="w-4 h-4" /> 엑셀(CSV) 다운로드
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Search Bar */}
                    <div className="p-6 border-b border-slate-100 flex items-center gap-4">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="이름, 이메일, 학교로 검색..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-900 font-semibold uppercase tracking-wider text-xs">
                                <tr>
                                    <th className="px-6 py-4">이름</th>
                                    <th className="px-6 py-4">이메일 (ID)</th>
                                    <th className="px-6 py-4">연락처</th>
                                    <th className="px-6 py-4">학교 / 학년</th>
                                    <th className="px-6 py-4">가입일</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <tr key={user.email} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">{user.name}</td>
                                            <td className="px-6 py-4 text-indigo-600">{user.email}</td>
                                            <td className="px-6 py-4">{user.phone}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900">{user.school}</span>
                                                    <span className="text-slate-400 text-xs">{user.grade}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-400">
                                                {new Date(user.joinedAt).toLocaleDateString('ko-KR')}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                            검색 결과가 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for the icon
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
