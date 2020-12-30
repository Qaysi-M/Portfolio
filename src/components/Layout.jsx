import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

import { NavMenu } from './NavMenu';
import { GlobalStyle } from './Styles'
import { Logo } from './Logo';
import { Footer } from './Footer';


const RootSt = styled.div`
    
`

const ContainerSt = styled(Container)`
    padding-left: 30px;
    padding-right: 30px;
`;


export const Layout = props =>
  <RootSt>
    <GlobalStyle />
    <NavMenu />
    <ContainerSt>
      <Logo />
      {props.children}
    </ContainerSt>
    <Footer />
  </RootSt>