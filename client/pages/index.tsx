import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import HomeCards from '../components/HomeCards';
import DivInputSearch from '../components/DivInputSearch';
import HomePageInfoSectionOne from '../components/HomePageInfoSectionOne';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .home-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 45vh;
    max-height: 45vh;

    .infos-partaudit {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80vw;
      font-size: 17px;
      padding: 0 10px;
      color: #ffffff;
      z-index: 2;
    }
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -1;
`;

const HomeCardDiv = styled.div`
  display: -moz-box;
  display: -webkit-box;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: -40px;
`;

const SectionOne = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>PartAudit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <div className="home-image">
          <ImageWrapper
            img={
              'https://cdn.blablacar.com/kairos/assets/build/images/carpool_blablabus_large-e3d8eff32c13cdafc080a100f03628bd.svg'
            }
          />
          <div className="infos-partaudit">
            <h1>Vos audits internes & formations en un clic !</h1>
            <DivInputSearch />
          </div>
        </div>
        <HomeCardDiv>
          <HomeCards />
          <HomeCards />
          <HomeCards />
        </HomeCardDiv>
        <SectionOne>
          <HomePageInfoSectionOne />
          <HomePageInfoSectionOne />
          <HomePageInfoSectionOne />
        </SectionOne>
      </Wrapper>
    </div>
  );
};

export default Home;
