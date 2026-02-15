import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PracticeMode } from './pages/PracticeMode';
import { MockExam } from './pages/MockExam';
import { History } from './pages/History';
import { AdminUserList } from './pages/AdminUserList';
import { Premium } from './pages/Premium';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none no-print">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-emerald-200/20 rounded-full blur-3xl" />
        </div>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<PracticeMode />} />
            <Route path="/practice/:date" element={<PracticeMode />} />
            <Route path="/mock" element={<MockExam />} />
            <Route path="/mock/:date" element={<MockExam />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin/users" element={<AdminUserList />} />
            <Route path="/premium" element={<Premium />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
