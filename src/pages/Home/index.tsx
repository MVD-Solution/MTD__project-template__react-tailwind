import React from 'react';
import Header from './../../components/Header';
import DropdownMenu from '../../components/DropdownMenu';
import SortBy from '../../components/SortBy';
import Question from '../../components/Question';

const index = () => {
  return (
    <div>
      <Header />
      <DropdownMenu />
      <SortBy />
      <Question />
    </div>
  );
};

export default index;
