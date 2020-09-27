import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';
import Nav from 'react-bootstrap/Nav';

export const HeaderWrapper = styled.div`
  background-color: var(--bg-light);
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`;

export const ContainerNav = styled(Nav)`
  flex-basis: var(--width-container);
`;

export const Container = styled.div`
  display: flex;
  flex-basis: var(--width-container);
  flex-direction: row;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--space)) var(--space);
  position: relative;
`;

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin: 10px 10px 10px 0;
  width: 120px;
`;

export const ButtonMenu = styled.div`
  &.is-active {}
`;

export const NavMenu = styled.div`
  width: 100%;
  display: none;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
    display: block;
  `}
  &.is-active {
    display: block;
  }
`;

export const NavLanguages = styled.div`
  margin-left: var(--space);
`;
