import React from 'react';
import styled from 'styled-components';
import logo from '../../public/Partauditblanc.png';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.color['blueNight']};
  width: 100%;
  color: #fff;
  margin-top: 20px;

  .copyright {
    display: flex;
    font-size: 13px;
  }

  .footer {
    padding: calc((100vw / 4 - 30px) * 0 + 4 * 15px) 15px;

    .logo {
      width: 70px;
      height: 70px;
    }

    @media (min-width: 720px) {
      width: 720px;
      margin: 0 auto;
      padding-bottom: 36px;
    }

    @media (min-width: 1170px) {
      padding-bottom: 0;
      width: 1170px;
      position: relative;
      height: 100%;
    }
  }
`;

const FooterContent = styled.div`
  margin: 20px auto;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;

    .title {
      display: flex;
      color: #fff;
      font-size: 12px;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      margin: 0.83em 0;
    }

    .content-infos-social {
      display: flex;
      height: 100%;
      width: 100%;
      margin-top: 1em;
      margin-bottom: 1em;
      line-height: 2;
      padding: 0;

      li {
        margin-right: 10px;
      }
    }

    .content-infos {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
      line-height: 2;
      padding: 0;

      li {
        position: relative;
        min-height: 30px;
        height: 30px;
        max-height: 30px;
        width: fit-content;
        text-decoration: none;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 720px) {
    display: flex;
    min-height: 25vh;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
        <FooterContent>
          <div className="content">
            <div className="title">À PROPOS DE PART&rsquo;AUDIT</div>
            <ul className="content-infos">
              <li>
                <Link href="/about-us">
                  <a>Qui sommmes-nous ?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Comment ça marche</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Nous contactez</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="title">À PROPOS DE PART&rsquo;AUDIT</div>
            <ul className="content-infos">
              <li>
                <Link href="#">
                  <a>CGU</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Centre d&rsquo;aide</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="title">NOUS REJOINDRE</div>
            <ul className="content-infos-social">
              <li>
                <Link href="#">
                  <a>
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <FaInstagram />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <FaTwitter />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <FaYoutube />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <FaLinkedinIn />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </FooterContent>
        <div className="copyright">
          Copyright&copy;
          {new Date().getFullYear()}&nbsp; Tous droits réservés&nbsp;
          <Link href="#">
            <a target="_blank">PART&rsquo;AUDIT</a>
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
