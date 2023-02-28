import en from './en';
import vi from './vi';
import { LANG_KEY } from '@constants/index';

const getMessages = (locale: string) => {
  switch (locale) {
    case LANG_KEY.EN:
      return {
        ...en
      };
    case LANG_KEY.VI:
      return {
        ...en,
        ...vi
      };
    default:
      return { ...en };
  }
};
export { getMessages };
