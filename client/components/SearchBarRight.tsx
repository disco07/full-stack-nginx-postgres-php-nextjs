import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding-left: 12px;
  padding-right: 12px;
  background: #ffffff;

  input {
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
    background: #fff;
    padding-left: 10px;
  }
`;
type Props = {
  type: string;
  placeholder: string;
  children: JSX.Element;
};

const SearchBarRight = ({ type, placeholder, children }: Props) => {
  return (
    <ParentDiv>
      <Div>
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus
        />
        {children}
      </Div>
    </ParentDiv>
  );
};

export default SearchBarRight;
