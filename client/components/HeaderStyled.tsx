import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;

  .title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

const HeaderStyled = ({ title, children }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Header>
      <div onClick={() => router.back()}>
        <IoIosArrowBack size="1.5em" />
      </div>
      <div className="title">{title}</div>
      {children}
    </Header>
  );
};

export default HeaderStyled;
