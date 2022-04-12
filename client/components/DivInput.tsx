import React from 'react';
import styled from 'styled-components';
import { IoMdEyeOff } from 'react-icons/io';

const ParentDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  max-width: 450px;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background: ${(props) => props.theme.color['divInputBackground']};
  padding-left: 12px;
  padding-right: 12px;

  input {
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
    background: ${(props) => props.theme.color['divInputBackground']};
    padding-left: 10px;
  }
`;
type Props = {
  type: string;
  placeholder: string;
  children: JSX.Element;
};

const DivInput = ({ type, placeholder, children }: Props) => {
  return (
    <ParentDiv>
      <Div>
        {children}
        <input type={type} placeholder={placeholder} />
        {type === 'password' && <IoMdEyeOff size="1.5em" />}
      </Div>
    </ParentDiv>
  );
};

export default DivInput;
