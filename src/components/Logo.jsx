import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';




const LogoSt = styled(animated.h1)`
    font-size: 14vmin;
    text-decoration: none;
    color: ${props => props.theme.font.color_1};
    font-weight: bold;


    background: transparent; 
    height: ${props => parseFloat(0.022 * (props.width - 375) + 15)}rem; //y = mx + b  // with two points 
                                                                         //a1 = (375, 15) ; a2 = (1920, 50) 

`;



export const Logo = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res1 = () => setWidth(width => window.innerWidth);
        window.addEventListener('resize', res1, false);
        return () => {
            window.removeEventListener('resize', res1, false);
        }
    });


    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 }, delay: 400 })
    return (
        <LogoSt style={fadeIn} width={width}>
            Mohammed
            <br />
            Qaysi
        </LogoSt>)
}
const IntroSt = styled.p`
    font-weight: ${props => props.theme.font.weight_2};
    font-size: 2.4rem;
    //font-style: italic;
    line-height: 1.6;
    color: ${props => props.theme.font.color_2};
    //color: #1c8c9b;
    padding-bottom: ${props => parseFloat(0.0077 * (props.width) + 3.087)}rem; //(width,padding), (375,6), (1920,18)
`


export const Intro = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res1 = () => setWidth(width => window.innerWidth);
        window.addEventListener('resize', res1, false);
        return () => {
            window.removeEventListener('resize', res1, false);
        }
    });


    return <IntroSt width={width}>
        Loving topology, probability theory, and functional programming
    </IntroSt>

}



