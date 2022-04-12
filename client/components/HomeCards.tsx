import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from './Button';
import Image from 'next/image';

const HomeCard = styled.div`
  background-color: #fff;
  color: #0d2339;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
    rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  max-width: 360px;
  height: 180px;
  margin: 8px;
  border-radius: 5px;
  z-index: 10;
  flex: 0 0 auto;

  .home-card-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: space-between;
    flex-grow: initial;
    padding: 8px;

    .home-card-content-infos {
      display: flex;
      align-items: self-start;
      flex: 1;

      .home-card-content-infos-text {
        flex: 1;
        width: 70%;
        font-weight: 600;
        font-size: 15px;
        text-align: justify;
        margin-left: 24px;
        line-height: 1.6;
        margin-top: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -1px;
      }
    }

    .home-card-content-action {
      align-self: center;
      margin-bottom: 3px;
    }
  }
`;

const imageLoaded = ({ src }) => {
  return `${src}`;
};

const HomeCards = (): JSX.Element => {
  return (
    <>
      <HomeCard>
        <div className="home-card-content">
          <div className="home-card-content-infos">
            <div className="home-card-content-infos-text">
              <span>
                Recevez et partagez vos documents sur Doctolib : ne les perdez
                plus jamais
              </span>
            </div>
            <Image
              loader={imageLoaded}
              src="https://www.doctolib.fr/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczVnIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91cf586861a5e6b6ddb81768ee7e527cb6fe29b7/FR_TLH%20Push_Desktop.png?disposition=attachment"
              alt="infos-image"
              width={80}
              height={120}
              unoptimized={true}
            />
          </div>
          <div className="home-card-content-action">
            <Button color="blueNight">
              <Link href="#">
                <a>Partager mes documents</a>
              </Link>
            </Button>
          </div>
        </div>
      </HomeCard>
    </>
  );
};

export default HomeCards;
