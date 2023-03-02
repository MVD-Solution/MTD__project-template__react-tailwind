import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/index';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center font-bold bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] sticky dark:bg-gray-800 dark:text-white dark:border-b-gray-700">
      <Link to={ROUTES.SUPPORT}>
        <FormattedMessage id="support" />
      </Link>
      <Link to={ROUTES.HOME}>
        <FormattedMessage id="home" />
      </Link>
      <Link to={ROUTES.SAMPLE}>
        <FormattedMessage id="sample" />
      </Link>
    </header>
  );
};

export default Header;
