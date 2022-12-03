import React from 'react';
import Header from './../../components/Header';
import DropdownMenu from '../../components/DropdownMenu';
import SortBy from '../../components/SortBy';
import Questions from '../../components/Questions';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ReactComponent as Arr } from './../../assets/resource/arrow/down-arrow.svg';

const index = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-[1000px]">
        <div className="mt-8">
          <DropdownMenu />
          <SortBy />
        </div>
        <Questions />
        <FormattedMessage
          id="greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage="Hello, <Link>Eric</Link>"
          values={{
            Link: (chunks) => <Link to={'/aaaaaa'}>{chunks}</Link>,
          }}
        />
      </div>
    </div>
  );
};

export default index;
