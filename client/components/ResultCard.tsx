import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { TiLocationArrow } from 'react-icons/ti';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import ReviewsNotes from './ReviewsNote';
import { ButtonColored } from './Button';
import { useDistance } from './hooks/useDistance';
import MapHoverContext from './MapHoverContext';

const SearchResultsContainer = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 18px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 1px 6px 1px rgb(0 0 0 / 10%);
  border-radius: 6px;
  height: auto;
  transition: box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
`;

const UsersPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 320px;
  height: 180px;
  font-size: 15px;

  .reviews {
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-top: 7px;
    margin-right: 53px;

    span {
      margin-left: 5px;
      font-size: 14px;
    }
  }

  .user-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-profile-check {
      position: relative;

      .checker {
        position: absolute;
        right: 0;
        bottom: 1px;
        width: 100%;
        height: 100%;

        .checker-circle {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 50%;
          border: 2px solid #49b675;
        }

        .checker-svg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          right: -1px;
        }
      }
    }

    .user-avatar {
      border-radius: 50%;
    }

    .user-infos {
      flex: 1 0 0;
      margin-left: 15px;
      max-width: 154px;

      .user-infos-text {
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .user-distance {
      display: flex;
      align-items: center;
    }
  }

  .user-location {
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-top: 5px;
    margin-right: 36px;

    .location-info {
      display: flex;
      flex-direction: column;
    }
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 313px);

  .price {
    font-weight: 500;
    font-size: 18px;
    align-self: flex-end;
  }

  .button {
    width: 120px;
    align-self: flex-end;
  }

  @media (min-width: 576px) {
    padding: 17px 30px 24px 32px;
  }
`;

const imageLoaded = ({ src }) => {
  return `${src}`;
};

interface IProps {
  img: string;
  firstName: string;
  lastName: string;
  title: string;
  notes: number;
  avis: number;
  price: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  checked: boolean;
}

const ResultCard = ({ result, index }: any): JSX.Element => {
  const {
    img,
    firstName,
    lastName,
    title,
    notes,
    avis,
    price,
    coordinates,
    checked,
  }: IProps = result;
  const distance = useDistance(
    [2.2328253, 48.7172965],
    [coordinates.lng, coordinates.lat],
  );

  const { hoverElement } = useContext(MapHoverContext);

  return (
    <SearchResultsContainer
      onMouseEnter={(e) =>
        hoverElement({
          element: e.target.parentNode.getAttribute('data-id'),
          hovered: true,
        })
      }
      onMouseLeave={(e) =>
        hoverElement({
          element: e.target.parentNode.getAttribute('data-id'),
          hovered: false,
        })
      }
      data-id={index}
    >
      <UsersPresentation>
        <div className="user-title">
          <div className="user-picture">
            <Link href={'#'}>
              <div className="user-profile-check">
                <Image
                  loader={imageLoaded}
                  className="user-avatar"
                  src={img}
                  width={60}
                  height={60}
                  objectFit="cover"
                  unoptimized={true}
                />
                {checked && (
                  <div className="checker">
                    <div className="checker-circle" />
                    <div className="checker-svg">
                      <IoIosCheckmarkCircle
                        size="1.3em"
                        color="#49b675"
                        style={{ backgroundColor: '#fff', borderRadius: '50%' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="user-infos">
            <div className="user-infos-text">
              <h3 title="Harry Potter">
                {firstName} {lastName}
              </h3>
            </div>
            <div className="user-infos-role">
              <span>{title}</span>
            </div>
            <div className="user-distance">
              <TiLocationArrow size="1.5em" color="grey" />
              <span>{distance} km</span>
            </div>
          </div>
        </div>
        <div className="user-location">
          <div>
            <IoLocationSharp size="1.3em" color="grey" />
          </div>
          <div className="location-info">
            <span>14 Rue Gabriel Péri</span>
            <span>35000, Rennes</span>
          </div>
        </div>
        <div className="reviews">
          <div>
            <ReviewsNotes notes={notes} />
          </div>
          <span>{avis} avis</span>
        </div>
      </UsersPresentation>
      <ProfileInfo>
        <div className="price">
          <span>{price} €</span>
        </div>
        <div className="button">
          <ButtonColored color="blueNight" width="110px">
            <Link href="#">
              <a>Reserver</a>
            </Link>
          </ButtonColored>
        </div>
      </ProfileInfo>
    </SearchResultsContainer>
  );
};

export default ResultCard;
