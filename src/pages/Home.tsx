import { FormattedMessage } from 'react-intl';
import { useStates as useDarkModeStates } from '@store/models/theme';
import { useActions as useDarkModeActions } from '@store/models/theme';
import { useActions as useIntlActions } from '@store/models/intl';

const Home = () => {
  const { toggleLang } = useIntlActions();
  const { switchTheme } = useDarkModeActions();
  const { theme } = useDarkModeStates();
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        <FormattedMessage id="home_primary_text" />
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        This is the universal template which could fit for almost your purposes.
      </p>
      <div className="flex gap-2 flex-wrap md:flex-nowrap mb-2 md:w-1/2 w-full dark:text-gray-600">
        <button
          className="px-4 py-2 bg-gray-200 font-bold rounded-lg w-full md:w-1/2"
          onClick={() => toggleLang()}
        >
          <FormattedMessage id="switch_language" />
        </button>
        <button
          type="button"
          onClick={() => switchTheme()}
          className="px-4 py-2 bg-gray-200 font-bold rounded-lg w-full md:w-1/2"
        >
          Theme: {theme}
        </button>
      </div>
    </div>
  );
};

export default Home;
