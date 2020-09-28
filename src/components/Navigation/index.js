import React from 'react';
import useMenu from '../useMenu';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();

  return (
    <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center">
      <Nav className="ml-auto">
        {menuItems.map((menu, index) => {
          if (menu.link) { // not a dropdown
            return (
              <div className="nav-link" key={`${menu.link}${index}`}>
                <S.NavigationLink
                  className="top-level"
                  to={menu.link}
                  aria-label={menu.name}
                  activeClassName="active"
                >
                  {menu.name}
                </S.NavigationLink>
              </div>);
          } else if (menu.subMenu) { // dropdown
            return (
              <NavDropdown title={menu.name} id="collapsible-nav-dropdown" key={`${menu.link}${index}`}>
                {menu.subMenu.map((subItem, index) => (
                  <NavDropdown.Item key={`${menu.link}${index}`}>
                    <S.NavigationLink
                      className="dropdown-item"
                      to={subItem.link}
                      aria-label={subItem.name}
                      activeClassName="active"
                      key={`${menu.link}${index}`}
                    >
                      {subItem.name}
                    </S.NavigationLink>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          }
        })}
      </Nav>
    </Navbar.Collapse>
  );
};

export default Navigation;
