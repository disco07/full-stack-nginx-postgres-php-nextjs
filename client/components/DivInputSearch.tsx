import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { useRouter } from 'next/router';
import useMobileAndTabletCheck from './hooks/useMobileAndTabletCheck';
import useGeoLocation, { location } from './hooks/useGeoLocation';
import { IoMdLocate } from 'react-icons/io';

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  width: 100%;

  .disabled-input-medium {
    @media (max-width: 720px) {
      width: 0;
    }
  }
`;

const DivInputContainer = styled.div`
  max-width: 450px;
  width: 100%;

  .locate {
    padding: 0 10px;
    cursor: pointer;
    border: none;
    background: none;

    @media (max-width: 720px) {
      display: none;
    }
  }
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  border-top: 1px #ccc solid;
  border-left: 1px #ccc solid;
  border-bottom-left-radius: ${(props) => (props.border ? '8px' : '0')};
  border-top-left-radius: ${(props) => (props.border ? '8px' : '0')};
  max-height: 50px;
  height: 50px;
  min-height: 50px;
  width: 100%;
  background: #ffffff;

  label {
    width: 56px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-right: 2px;
`;

const SVG = styled.svg`
  width: ${(props) => (props.width ? props.width : '35px')};
  height: ${(props) => (props.height ? props.height : '35px')};
  padding-top: 12px;
  padding-left: 15px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.color['blueNightPartAudit']};
  height: 50px;
  width: 125px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border: transparent;
  color: #fafafa;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.color['blueNight']};
  }

  .button-search-icon {
    display: none;
  }

  @media (max-width: 820px) {
    width: 50px;
    .button-search {
      display: none;
    }
    .button-search-icon {
      display: block;
    }
  }
`;

const DivInputSearch = (): JSX.Element => {
  const router = useRouter();
  const check = useMobileAndTabletCheck();
  const [state, setState] = useState<boolean>(false);
  const [location, setLocation] = useState<location>({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const searchPage = () => {
    state && router.push('/search-offers');
  };

  useEffect(() => {
    if (check) {
      setState(true);
    } else setState(false);
  }, [check]);
  console.log(location);

  const handleLocation = () => {
    setLocation(useGeoLocation());
  };

  return (
    <ParentDiv onClick={searchPage}>
      <DivInputContainer>
        <DivInput border>
          <label htmlFor="">
            <SVG>
              <path
                fill="#444444"
                d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
              />
            </SVG>
          </label>
          <Input placeholder="Audit, formation, nom..." autocomplete="off" />
        </DivInput>
      </DivInputContainer>
      <DivInputContainer className="disabled-input-medium">
        <DivInput>
          <label htmlFor="">
            <SVG width="45px" height="45px">
              <path
                fill="#d7d3cf"
                d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
              />
            </SVG>
          </label>
          <Input placeholder="Où ? (Adresse, Ville..)" autocomplete="off" />
          <button onClick={handleLocation} className="locate">
            <IoMdLocate />
          </button>
        </DivInput>
      </DivInputContainer>
      <div className="button">
        <Button>
          <span className="button-search">Rechercher</span>
          <span className="button-search-icon">
            <IoIosSearch size="1.5em" />
          </span>
        </Button>
      </div>
    </ParentDiv>
  );
};

export default DivInputSearch;
