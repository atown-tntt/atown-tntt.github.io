import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';
import { Link } from 'gatsby';

export const NavigationLink = styled(LocalizedLink)`
  color: var(--text-dark);
  text-decoration: none !important;
  position: relative;
  margin-bottom: var(--space-sm);
  text-align: center;
  cursor: pointer;
  ${media.greaterThan('992px')`
    margin-bottom: 0;
    padding: 0 var(--space-sm);
  `} 

  &.top-level:after {
    ${media.greaterThan('992px')`
      content: '';
      display: inline-block;
      width: 0;
      height: 4px;
      background: var(--primary-color);
      position: absolute;
      left: 0;
      bottom: -10px;
      opacity: 0;
      transition: .3s ease-in-out;
    `}
  }

  &:hover,
  &.active {
    font-weight: bold;
    color: #222;

    &.top-level {
      ${media.greaterThan('992px')`
        font-weight: normal;
      `}
    }

    &:after {
      opacity: 1;
      position: absolute !important;
      bottom: -10px;
      width: 100%;
    }
  }
`;

export const NavigationButton = styled(Link)`
  background: var(--primary-color);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  padding: var(--space-sm) var(--space);
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  ${media.greaterThan('medium')`
    margin-left: var(--space-lg);
  `}
`;
