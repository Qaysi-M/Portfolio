import React, { } from 'react';
import { } from 'reactstrap'

import styled from 'styled-components';

const FooterSt = styled.footer`
    color: white;
    text-align:center;
    color: ${props => props.theme.font.color_2};
    font-weight: ${props => props.theme.font.weight_2};

`


export const Footer = () =>
    <FooterSt>
        Made by Mohammed Qaysi © 2020
    </FooterSt>