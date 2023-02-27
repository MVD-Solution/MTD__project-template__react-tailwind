import { FormattedMessage } from 'react-intl';
import { useActions } from '../store/model/intl';

const Home = () => {
  const { toggleLang } = useActions();
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Together, we draw the future
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
        long-term value and drive economic growth.
      </p>
      <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg" onClick={() => toggleLang()}>
        <FormattedMessage id="switch_language" />
      </button>
    </div>
  );
};

export default Home;
