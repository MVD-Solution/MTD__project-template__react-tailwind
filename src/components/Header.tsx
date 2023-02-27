import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center font-bold bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] sticky dark:bg-gray-800 dark:text-white dark:border-b-gray-700">
      <Link to="/">
        <FormattedMessage id="home" />
      </Link>
      <Link to="post">
        <FormattedMessage id="create_post" />
      </Link>
    </header>
  );
};

export default Header;
