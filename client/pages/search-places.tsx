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

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #ccc;
    padding: 0;

    .title {
      background: transparent;
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: 600;
    }

    li {
      display: flex;
      align-items: center;
      padding-left: 20px;
      height: 55px;
      background: #ffffff;
      p {
        padding-right: 5px;
      }
    }
  }
`;
const Span = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
`;

const SVG = styled.svg`
  width: ${(props) => (props.width ? props.width : '35px')};
  height: ${(props) => (props.height ? props.height : '35px')};
  padding-top: 10px;
`;

const SearchPlaces = (): JSX.Element => {
  return (
    <SearchContainer>
      <HeaderStyled title="Lieu">
        <div />
      </HeaderStyled>
      <SearchBarRight type="text" placeholder="Où ? (Adresse, Ville..)">
        <IoIosSearch size="1.6em" color="grey" />
      </SearchBarRight>
      <ul>
        <li>
          <Span>
            <SVG width="45px" height="45px">
              <path
                fill="#d7d3cf"
                d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
              />
            </SVG>
            Autour de moi
          </Span>
        </li>
        <li className="title">Adresse récentes</li>
        <li>
          <p>Palaiseau</p>
          <span>France</span>
        </li>
      </ul>
    </SearchContainer>
  );
};

export default SearchPlaces;
