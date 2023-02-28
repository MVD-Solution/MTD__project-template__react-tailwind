import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { ThemeTypes } from '../models/common';

const Chat = () => {
  const { theme, setTheme } = useDarkMode();
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={() => setTheme((theme: ThemeTypes) => (theme === 'dark' ? 'light' : 'dark'))}
        className="px-4 py-2 bg-gray-200 font-bold rounded-lg w-full md:w-1/2"
      >
        Theme: {theme}
      </button>
    </div>
  );
};

export default Chat;
