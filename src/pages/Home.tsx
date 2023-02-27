import { FormattedMessage } from 'react-intl';
import useDarkMode from '../hooks/useDarkMode';
import { ThemeTypes } from '../models/common';
import { useActions } from '../store/model/intl';

const Home = () => {
  const { toggleLang } = useActions();
  const { theme, setTheme } = useDarkMode();
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        <FormattedMessage id="home_primary_text" />
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        This is the universal template which could fit for almost your purposes.
      </p>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg" onClick={() => toggleLang()}>
          <FormattedMessage id="switch_language" />
        </button>
        <button
          type="button"
          onClick={() => setTheme((theme: ThemeTypes) => (theme === 'dark' ? 'light' : 'dark'))}
          className="px-4 py-2 bg-gray-200 font-bold rounded-lg"
        >
          Theme: {theme}
        </button>
      </div>
    </div>
  );
};

export default Home;
