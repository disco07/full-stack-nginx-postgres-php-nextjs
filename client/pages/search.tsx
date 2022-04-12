import React, { useState } from 'react';
import HeaderStyledSearch from '../components/HeaderStyledSearch';
import DivInputSearch from '../components/DivInputSearch';
import styled from 'styled-components';
import { ScreenMinSmall } from '../components/ScreenStyled';
import SearchListItem from '../components/SearchListItem';
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
import MapHoverContext, {
  IMapHoverContext,
} from '../components/MapHoverContext';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loader />
    </div>
  ),
});

const data = [
  {
    id: 1,
    img: 'https://www.e-xpertsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
    firstName: 'John',
    lastName: 'Doe',
    title: 'Auditeur et formateur',
    notes: '3.0',
    avis: 250,
    price: '550,00',
    coordinates: { lat: 48.8546, lng: 2.34771 },
    checked: true,
  },
  {
    id: 2,
    img: 'https://media.gqmagazine.fr/photos/61961af186304249e82b5241/3:4/w_675,h_900,c_limit/Harry-Potter.jpg',
    firstName: 'Harry',
    lastName: 'Potter',
    title: 'Auditeur et formateur',
    notes: '3.2',
    avis: 150,
    price: '530,00',
    coordinates: { lat: 48.8718, lng: 2.35779 },
    checked: false,
  },
  {
    id: 3,
    img: 'http://p9.storage.canalblog.com/93/69/1337059/102645311_o.jpg',
    firstName: 'Hermione',
    lastName: 'Granger',
    title: 'Auditeur et formateur',
    notes: '5.0',
    avis: 70,
    price: '520,00',
    coordinates: { lat: 48.8586, lng: 2.37943 },
    checked: true,
  },
  {
    id: 4,
    img: 'https://p1.storage.canalblog.com/23/55/1337059/102547757.jpg',
    firstName: 'Ron',
    lastName: 'Wesley',
    title: 'Auditeur et formateur',
    notes: '4.5',
    avis: 50,
    price: '570,00',
    coordinates: { lat: 48.7126, lng: 2.2436 },
    checked: false,
  },
  {
    id: 5,
    img: 'https://img-4.linternaute.com/857r_kVyZOX3h2iAw_eFY-8PRD0=/1500x/smart/8f1319a15b08404d9b921a57cf9b3f38/ccmcms-linternaute/21889615.jpg',
    firstName: 'Joan',
    lastName: 'Rowling',
    title: 'Auditeur et formateur',
    notes: '4.0',
    avis: 61,
    price: '500,00',
    coordinates: { lat: 48.7228, lng: 2.2633 },
    checked: true,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 15px;
  background: #fff;

  .search-bar {
    justify-self: center;
    width: 100%;
    margin: 0 10px;
  }

  .search-filter {
    position: relative;
    top: 0;
    background-color: #fff;
    margin: 10px 10px;
    box-shadow: 0 2px 10px 0 rgb(43 70 96 / 20%);
    max-width: 1160px;
    width: 100%;
    padding: 0 15px;
    z-index: 99;

    .filters {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;

      .filters-item {
        display: flex;
        font-size: 14px;
        min-height: 50px;
        align-items: center;
        position: relative;
        padding: 8px 0;

        .filters-title {
          font-weight: bold;
          color: rgba(43, 70, 96, 0.4);
          padding-right: 16px;
        }
      }
    }
  }
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 992px) {
    display: flex;
    max-width: 1170px;
  }

  .title-search {
    width: 100%;
    padding: 15px 0;

    h1 {
      font-size: 26px;
      font-weight: 700;
    }
  }
`;

const Content = styled.div`
  display: flex;

  .left {
    @media (min-width: 1170px) {
      width: calc((8 * ((1170px / 12) - 30px)) + ((7) * 30px));
    }
    @media (min-width: 992px) {
      width: calc((8 * ((100vw / 12) - 30px)) + ((7) * 30px));
      margin-right: 30px;
    }
  }

  .right {
    .right-map {
      display: block;
      position: sticky;
      top: 15px;
    }

    @media (min-width: 1170px) {
      width: calc((4 * ((1170px / 12) - 30px)) + ((3) * 30px));
    }
    @media (min-width: 992px) {
      width: calc((4 * ((100vw / 12) - 30px)) + ((3) * 30px));
    }
  }
`;

const Search = (): JSX.Element => {
  const [hover, setHover] = useState({
    element: null,
    hovered: false,
  });

  const contextValue: IMapHoverContext = {
    element: hover.element,
    hovered: hover.hovered,
    hoverElement: setHover,
  };
  return (
    <>
      <MapHoverContext.Provider value={contextValue}>
        <HeaderStyledSearch />
        <Container>
          <ScreenMinSmall className="search-bar">
            <DivInputSearch />
          </ScreenMinSmall>
          <div className="search-filter">
            <div className="filters">
              <div className="filters-item">
                <span className="filters-title">FILTRER PAR</span>
              </div>
            </div>
          </div>
          <PageContent>
            <div className="title-search">
              <h1>Resultats de recherche audit...</h1>
            </div>
            <Content>
              <div className="left">
                <SearchListItem data={data} />
              </div>
              <div className="right">
                <div className="right-map">
                  <Map data={data} />
                </div>
              </div>
            </Content>
          </PageContent>
        </Container>
      </MapHoverContext.Provider>
    </>
  );
};

export default Search;
