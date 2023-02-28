import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANG_KEY } from '@constants/index';
import { getMessages } from '@locale/messages';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

type PayloadTypes = {
  lang: string;
};

export const intlSlice = createSlice({
  name: 'intl',
  initialState: {
    languageKey: LANG_KEY.EN,
    translations: getMessages(LANG_KEY.EN)
  },
  reducers: {
    saveLang: (state, action: PayloadAction<PayloadTypes>) => {
      const lang = action.payload.lang;
      state.languageKey = lang;
      state.translations = getMessages(lang);
    },
    toggleLang: (state) => {
      const lang = state.languageKey === LANG_KEY.EN ? LANG_KEY.VI : LANG_KEY.EN;
      state.languageKey = lang;
      state.translations = getMessages(lang);
    }
  }
});

const { saveLang: saveLangAction, toggleLang: toggleLangAction } = intlSlice.actions;

export const useActions = () => {
  const dispatch = useAppDispatch();
  const saveLang = (payload: string) => {
    dispatch(saveLangAction({ lang: payload }));
  };
  const toggleLang = () => {
    dispatch(toggleLangAction());
  };
  return { saveLang, toggleLang };
};

export const useStates = () => {
  const language = useAppSelector((state) => state.intl.languageKey);
  const translations = useAppSelector((state) => state.intl.translations);
  return { language, translations };
};
