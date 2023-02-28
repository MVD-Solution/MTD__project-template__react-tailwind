import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@constants/index';
import Header from '@components/Header';
import Home from '@pages/Home';
import Chat from '@pages/Chat';
import { useStates } from '@store/models/darkMode';

const Router = () => {
  const { theme } = useStates();
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, []);
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <BrowserRouter>
        <Header />
        <div className="mt-4 mx-5">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CHAT} element={<Chat />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default Router;
