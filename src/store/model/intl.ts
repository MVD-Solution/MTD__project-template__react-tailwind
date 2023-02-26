import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_KEY } from '../../constants/locale';
import { RootState } from '../index.type';
import { getMessages } from '../../locale/messages';

type PayloadTypes = {
  lang: string;
};

export const intlSlice = createSlice({
  name: 'intl',
  initialState: {
    languageKey: LANG_KEY.EN,
    translations: getMessages(LANG_KEY.EN),
  },
  reducers: {
    saveLang: (state, action: PayloadAction<PayloadTypes>) => {
      const lang = action.payload.lang;
      state.languageKey = lang;
      state.translations = getMessages(lang);
    },
    toggleLang: (state) => {
      const lang =
        state.languageKey === LANG_KEY.EN ? LANG_KEY.VI : LANG_KEY.EN;
      state.languageKey = lang;
      state.translations = getMessages(lang);
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
    (state: RootState) => state.intl.translations
  );
  return { language, translations };
};
