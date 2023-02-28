import { useEffect, useState } from 'react';
import { ThemeTypes } from '@custom-types/index';

const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeTypes>(
    (localStorage.getItem('theme') as ThemeTypes) || 'light'
  );
  const previousTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(previousTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, setTheme };
};

export default useDarkMode;
