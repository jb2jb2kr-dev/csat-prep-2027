export interface User {
    name: string;
    email: string; // ID
    password: string;
    phone: string;
    school: string;
    grade: string;
    joinedAt: string;
}

const USERS_KEY = 'csat_users'; // Stores Array<User>
const CURRENT_USER_KEY = 'csat_current_user'; // Stores User (or just email)

export const register = (newUser: Omit<User, 'joinedAt'>): { success: boolean; message: string } => {
    const users = getAllUsers();
    if (users.find(u => u.email === newUser.email)) {
        return { success: false, message: '이미 등록된 이메일입니다.' };
    }

    const user: User = {
        ...newUser,
        joinedAt: new Date().toISOString()
    };

    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: '회원가입 성공!' };
};

export const login = (email: string, password: string): { success: boolean; user?: User; message: string } => {
    const users = getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        window.dispatchEvent(new Event('auth-change'));
        return { success: true, user, message: '로그인 성공!' };
    }
    return { success: false, message: '이메일 또는 비밀번호가 일치하지 않습니다.' };
};

export const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.dispatchEvent(new Event('auth-change'));
};

export const getCurrentUser = (): User | null => {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
};

export const getAllUsers = (): User[] => {
    const stored = localStorage.getItem(USERS_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const findPassword = (email: string, name: string, phone: string): string | null => {
    const users = getAllUsers();
    const user = users.find(u => u.email === email && u.name === name && u.phone === phone);
    return user ? user.password : null;
};

export const updatePassword = (email: string, currentPw: string, newPw: string): { success: boolean; message: string } => {
    const users = getAllUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
        return { success: false, message: '사용자를 찾을 수 없습니다.' };
    }

    if (users[userIndex].password !== currentPw) {
        return { success: false, message: '현재 비밀번호가 일치하지 않습니다.' };
    }

    users[userIndex].password = newPw;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Update current user session if needed
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.email === email) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
    }

    return { success: true, message: '비밀번호가 변경되었습니다.' };
};

