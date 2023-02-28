import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

export const themeSlice = createSlice({
  name: 'theme',
  initialState:
    window.localStorage.getItem('theme') === 'light' ||
    window.localStorage.getItem('theme') === 'dark'
      ? (window.localStorage.getItem('theme') as string)
      : 'light',
  reducers: {
    switchTheme: (state) => {
      const currentTheme = state;
      const nextTheme = state === 'light' ? 'dark' : 'light';
      const root = window.document.documentElement;
      root.classList.remove(currentTheme);
      root.classList.add(nextTheme);
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    }
  }
});

const { switchTheme: switchThemeAction } = themeSlice.actions;

export const useActions = () => {
  const dispatch = useAppDispatch();
  const switchTheme = () => dispatch(switchThemeAction());
  return { switchTheme };
};

export const useStates = () => {
  const theme = useAppSelector((state) => state.theme);
  return { theme };
};
