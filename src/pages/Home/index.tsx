import React from 'react';
import Header from './../../components/Header';
import DropdownMenu from '../../components/DropdownMenu';
import SortBy from '../../components/SortBy';

const index = () => {
  return (
    <div>
      <Header />
      <DropdownMenu />
      <SortBy />
    </div>
  );
};

export default index;
