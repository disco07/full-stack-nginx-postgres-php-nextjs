import styled from 'styled-components';

const mediaQuery = `
  @media (min-width: 760px) {
      padding-left: 20px;
      padding-right: 20px;
      width: auto;
  }

  @media (min-width: 1020px) {
      padding-left: 15px;
      padding-right: 15px;
      width: auto;
  }
  
  @media (min-width: 1260px) {
      padding-left: 0;
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
  }
`;

const HeaderStyled = styled.div`
  background-color: #fff;
  color: #262626;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  min-height: 60px;
  text-align: left;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
  z-index: 999;
  position: relative;

  @media (max-width: 425px) {
    min-height: 50px;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  ${mediaQuery};

  @media (max-width: 425px) {
    height: 50px;
  }
`;

const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const LHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const RHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar {
    display: flex;
  }
`;

const NavDown = styled.div`
  background-color: ${(props) => props.theme.color[props.color]};

  .headerDown {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
  }

  @media (min-width: 760px) {
    .containerHeader {
      padding-left: 20px;
      padding-right: 20px;
      width: auto;
    }
  }

  @media (min-width: 1020px) {
    .containerHeader {
      padding-left: 15px;
      padding-right: 15px;
      width: auto;
    }
  }

  @media (min-width: 1260px) {
    .containerHeader {
      padding-left: 0;
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
    }
  }

  .navbar__ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    li {
      color: #ffffff;
      margin: 0 15px;
      width: 90px;
      text-align: center;
    }

    .vertical {
      border-left: 1px solid #ffffff;
      height: 30px;
    }
  }
`;

export { HeaderStyled, HeaderWrap, Navbar, LHeader, RHeader, NavDown };
