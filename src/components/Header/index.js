import React from 'react';
import useTranslations from '../useTranslations';
import Navigation from '../Navigation';
import Languages from '../Languages';
import ButtonMenu from '../ButtonMenu';
import Logo from '../Logo';
import Navbar from 'react-bootstrap/Navbar';

import { useMenu } from '../../hooks/menu';

import * as S from './styled';

const Header = () => {
  const { home } = useTranslations();
  const { openedMenu, toggleMenu } = useMenu();

  return (
    <Navbar collapseOnSelect className='justify-content-center' expand='lg' bg='light' variant='light'>
      <S.ContainerNav className='justify-content-center align-items-center'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ position: "absolute", left: "10px", top: "64px" }}/>
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>
        <Languages />
        <Navigation />
      </S.ContainerNav>
    </Navbar>
  );
  /*
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>

        <S.ButtonMenu className={openedMenu ? 'is-active' : ''}>
          <ButtonMenu handleClick={toggleMenu} isActive={openedMenu} />
        </S.ButtonMenu>

        <S.NavMenu className={openedMenu ? 'is-active' : ''}>
          <Navigation />
        </S.NavMenu>
      </S.Container>
    </S.HeaderWrapper>
  ); */
};

export default Header;
