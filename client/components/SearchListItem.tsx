import React from 'react';
import ResultCard from './ResultCard';

const SearchListItem = ({ data }: any) => {
  return (
    <>
      {data?.map((item, index) => (
        <ResultCard result={item} index={index} key={item.id} />
      ))}
    </>
  );
};

export default SearchListItem;
