import { FormattedMessage } from 'react-intl';
import { useStates as useDarkModeStates } from '@store/models/theme';
import { useActions as useDarkModeActions } from '@store/models/theme';
import { useActions as useIntlActions } from '@store/models/intl';
import Button from '@components/Button';
import { useActions as useTodoActions, useStates as useTodoStates } from '@store/models/todo';
import { useEffect } from 'react';

const Home = () => {
  const { toggleLang } = useIntlActions();
  const { switchTheme } = useDarkModeActions();
  const { theme } = useDarkModeStates();
  const { todos } = useTodoStates();
  const { fetchTodos } = useTodoActions();
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        <FormattedMessage id="home_primary_text" />
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        This is the universal template which could fit for almost your purposes.
      </p>
      <div className="flex gap-2 flex-wrap md:flex-nowrap mb-2 md:w-1/2 w-full dark:text-gray-600">
        <Button onClick={toggleLang}>
          <FormattedMessage id="switch_language" />
        </Button>
        <Button onClick={switchTheme}>Theme: {theme}</Button>
      </div>
      <div className="flex gap-2 flex-col md:w-1/2 w-full">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg font-bold text-xl text-center">
          What's our template handles for you
        </div>
      </div>
    </div>
  );
};

export default Home;
