import React from 'react';
import NavbarSite from './NavbarSite';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import useVerifyPath from '../hooks/useVerifyPath';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    list-style: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
const theme = {
  color: {
    abricot: '#e67e30',
    blueNight: '#001418',
    bluePartAudit: '#25408D',
    blueNightPartAudit: '#1f2663',
    orangePartAudit: '#D07325',
    background: '#edf0f5',
    divInputBackground: '#e5eded',
  },
};

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props): JSX.Element => {
  const route = useVerifyPath();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!route && <NavbarSite />}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
