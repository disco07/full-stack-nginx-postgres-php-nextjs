import React from 'react';
import styled from 'styled-components';
import { FaCogs } from 'react-icons/fa';
import { VscGraphLine, VscSearch, VscWorkspaceTrusted } from 'react-icons/vsc';
import { GrPersonalComputer } from 'react-icons/gr';
import { GiPencilBrush } from 'react-icons/gi';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .home-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 25vh;
    max-height: 45vh;
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
  color: ${(props) => props.theme.color['blueNight']};

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    border-radius: 5px;
    max-width: 700px;
    width: 100%;
    background: ${(props) => props.theme.color['blueNight']};

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      text-transform: uppercase;
      width: 100%;
      height: 30px;
      color: #fff;
    }

    .constat {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: space-between;
      padding: 15px 0;
      width: 100%;
      background: #fff;
    }

    .proposition {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: space-between;
      padding: 15px 0;
      width: 100%;
      color: #fff;
    }

    .centered {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
    }

    .others {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 15px 0;

      span {
        font-weight: 600;
        margin: 15px 0;
      }

      .items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 10px;
      }
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  font-size: 13px;
  width: 200px;
  margin: 0 12px;

  svg {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-weight: 600;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  font-size: 13px;
  width: 200px;
  margin: 0 5px;

  svg {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-weight: 600;
  }

  .orange {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${(props) => props.theme.color['orangePartAudit']};
  }
`;

const AboutUs = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="home-image">
        <ImageWrapper
          img={
            'https://cdn.blablacar.com/kairos/assets/build/images/carpool_blablabus_large-e3d8eff32c13cdafc080a100f03628bd.svg'
          }
        />
      </div>
      <HomeCardDiv>
        <div className="content">
          <h1>Qui sommes-nous ?</h1>
          <div className="constat">
            <LeftSide>
              <div>
                <FaCogs size="1.5em" color="black" />
              </div>
              <div>
                L&rsquo;audit interne est un outil permettant de vérigier
                l&rsquo;éfficacité d&rsquo;un système de management.
              </div>
              <div>
                En l&rsquo;occurrence dans le domaine du management de la
                qualité, la norme <span>ISO 9001</span> mais aussi les autres
                référentiels tels que
                <span> ISO 17025, ISO 14001, EN 9100, OHSAS 18001</span> exigent
                au moins un audit par an.
              </div>
            </LeftSide>
            <RightSide>
              <div>
                <VscSearch size="1.5em" color="black" />
              </div>
              <div className="orange">notre constat</div>
              <div>
                Il étonnant qu&rsquo;à l&rsquo;ère du digital{' '}
                <span>
                  les entreprises peinent à planifier leurs audits internes{' '}
                </span>
                et que les prestataires d&rsquo;audits{' '}
                <span> manquent de visibilité</span>
              </div>
            </RightSide>
          </div>
          <div className="centered">
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>
              NOS PROPOSITIONS
            </div>
            <div className="proposition">
              <LeftSide>
                <div style={{ fontWeight: 700 }}>ENTREPRISES</div>
                <div>
                  S&rsquo;il vous fallait plusieurs jours pour planifier vos
                  prestations, avec <span>PART&rsquo;AUDIT </span>
                  quelques clics vous suffisent.
                </div>
                <div />
              </LeftSide>
              <RightSide>
                <div style={{ fontWeight: 700, marginBottom: 10 }}>
                  PRESTATAIRES
                </div>
                <div>
                  Gagnez en visibilité avec <span>PART&rsquo;AUDIT </span> et
                  simplifiez-vous la vie en profitant de nos services de
                  réservation de transports et hébergements.
                </div>
              </RightSide>
            </div>
          </div>
          <div
            className="centered"
            style={{ backgroundColor: '#fff', width: '100%' }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                borderBottom: '2px solid #000',
              }}
            >
              PART&rsquo;AUDIT C&rsquo;EST AUSSI
            </div>
            <div className="others">
              <div className="items">
                <span>qualticien</span>
                <VscWorkspaceTrusted size="2em" />
              </div>
              <div className="items">
                <span>graphic designer</span>
                <GiPencilBrush size="2em" />
              </div>
              <div className="items">
                <span>chargée d&rsquo;affaires</span>
                <VscGraphLine size="2em" />
              </div>
              <div className="items">
                <span>informaticiens</span>
                <GrPersonalComputer size="2em" />
              </div>
            </div>
          </div>
        </div>
      </HomeCardDiv>
    </Wrapper>
  );
};

export default AboutUs;
