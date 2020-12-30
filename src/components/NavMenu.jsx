import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem } from 'reactstrap';

import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components'

const NavSt = styled.div`
    color: ${props => props.theme.font.color_1};
    background: transparent;
    border: transparent;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;

`;

const NavbarTogglerSt = styled(NavbarToggler)`
    border-color:  ${props => props.theme.font.color_2};
    &:active {
      background-color:  ${props => props.theme.font.color_2};
    };
    
`;



const NavbarSt = styled(Navbar)`
  border-color: transparent;

`

export const NavMenu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <header>
    <NavbarSt className="navbar-expand-sm navbar-toggleable-sm ng-white  box-shadow mb-3">
      <Container>
        <NavbarTogglerSt onClick={toggle} className="mr-2" expand="lg">
          <img src={require('../images/menu-icon.png')} alt="menu-icon" />
        </NavbarTogglerSt>
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <ScrollLink to={"projects"} smooth={true} duration={1000}><NavSt>Projects</NavSt></ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink to={"next-project"} smooth={true} duration={1000}><NavSt>Next Project</NavSt></ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink to={"contacts"} smooth={true} duration={1000}><NavSt>Contacts</NavSt></ScrollLink>
            </NavItem>
          </ul>
        </Collapse>
      </Container>
    </NavbarSt>
  </header >
}