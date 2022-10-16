import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import en from '../../locale/en';
import vi from '../../locale/vi';
import { LANG_KEY } from '../../constants/locale';
import { RootState } from '../index.type';

const defaultLanguageKey = LANG_KEY.EN;

export const intlSlice = createSlice({
  name: 'intl',
  initialState: {
    languageKey: defaultLanguageKey,
    translations: defaultLanguageKey === LANG_KEY.EN ? en : vi,
  },
  reducers: {
    saveLang: (state, action) => {
      const lang = action.payload.lang;
      state.languageKey = lang;
      state.translations = lang === LANG_KEY.EN ? en : vi;
    },
    toggleLang: (state) => {
      const lang =
        state.languageKey === LANG_KEY.EN ? LANG_KEY.VI : LANG_KEY.EN;
      state.languageKey = lang;
      state.translations = lang === LANG_KEY.EN ? en : vi;
    },
  },
});

const { saveLang: saveLangAction, toggleLang: toggleLangAction } =
  intlSlice.actions;

export const useActions = () => {
  const dispatch = useDispatch();
  const saveLang = (payload: string) => {
    dispatch(saveLangAction({ lang: payload }));
  };
  const toggleLang = () => {
    dispatch(toggleLangAction());
  };
  return { saveLang, toggleLang };
};

export const useStates = () => {
  const language = useSelector((state: RootState) => state.intl.languageKey);
  const translations = useSelector(
    (state: RootState) => state.intl.translations,
  );
  return { language, translations };
};
