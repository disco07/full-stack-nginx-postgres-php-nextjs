import React from 'react';
import styled from 'styled-components';
import HeaderStyled from '../components/HeaderStyled';
import SearchBarRight from '../components/SearchBarRight';
import { IoIosSearch } from 'react-icons/io';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  height: 100vh;
  width: 100vw;
  background: #eef2f7;
`;

const SearchOffers = (): JSX.Element => {
  return (
    <SearchContainer>
      <HeaderStyled title="Rechercher">
        <div />
      </HeaderStyled>
      <SearchBarRight type="text" placeholder="Audit, formation, nom...">
        <IoIosSearch size="1.6em" color="grey" />
      </SearchBarRight>
    </SearchContainer>
  );
};

export default SearchOffers;
