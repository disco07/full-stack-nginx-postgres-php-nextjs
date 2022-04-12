import React from 'react';
import Link from 'next/link';
import { NavDown } from './HeaderStyled';

const NavbarDown = () => {
  return (
    <>
      <NavDown color="blueNight">
        <div className="headerDown containerHeader">
          <ul className="navbar__ul">
            <li>
              <Link href="/">
                <a>Accueil</a>
              </Link>
            </li>
            <div className="vertical" />
            <li>
              <Link href="/">
                <a>À la une</a>
              </Link>
            </li>
            <div className="vertical" />
            <li>
              <Link href="/">
                <a>Qui sommes nous ?</a>
              </Link>
            </li>
            <div className="vertical" />
            <li>
              <Link href="/">
                <a>Comment ça marche</a>
              </Link>
            </li>
            <div className="vertical" />
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </NavDown>
    </>
  );
};

export default NavbarDown;
