
import styled from 'styled-components';


import { createGlobalStyle } from 'styled-components';


import {
    Card, CardTitle, CardFooter,
    CardText, CardSubtitle
} from 'reactstrap';





export const GlobalStyle = createGlobalStyle`
  @import url('../fonts/styles.css');

  body {
    background: ${props => props.theme.background.color_1};
    font-family: 'ITC Avant Garde Gothic Std';
  }
`


export const ASt = styled.a`
    color: ${props => props.theme.font.color_2};
    text-decoration: underline;        
    &:hover {
        color: ${props => props.theme.font.color_3};
    };
`


export const SectionNameSt = styled.h2`
    color: ${props => props.theme.font.color_1};
    font-weight: ${props => props.theme.font.weight_2};
    font-size: 3.5rem;
    text-align: center;
    padding-bottom: ${props => parseFloat(0.00047 * (props.width) + 2.75)}rem; //(width,padding), (375,2), (1920,3);
`

export const SectionSt = styled.div`
    color: ${props => props.theme.font.color_2};
    font-weight: ${props => props.theme.font.weight_2};
    text-align: ${props => props.align};
    padding-bottom: ${props => parseFloat(0.00047 * (props.width) + 2.75)}rem; //(width,padding), (375,2), (1920,3);
`



export const CardTitleSt = styled(CardTitle)`
    color: ${props => props.theme.font.color_1};
    font-weight: ${props => props.theme.font.weight_2};
    font-size: 2.5rem;
`

export const CardSt = styled(Card)`
   background: hsl(184, 25%, 11%, .5);
    //backdrop-filter: saturate(180%) blur(40px);
    //-webkit-backdrop-filter: saturate(180%) blur(40px);
`

export const CardTextSt = styled(CardText)`
    color: ${props => props.theme.font.color_2};
    font-weight: ${props => props.theme.font.weight_2}; 
   
`

export const CardSubtitleSt = styled(CardSubtitle)`
    color: ${props => props.theme.font.color_2};
    //font-weight: ${props => props.theme.font.weight_2}; 
    font-style: italic;
`

export const CardFooterSt = styled(CardFooter)`
    color: ${props => props.theme.font.color_2};
    display: inline-block;
    flex-direction: row;
   
    //font-weight: ${props => props.theme.font.weight_2};
`

export const DivSideSt = styled.div`
    flex-wrap: 100%;
    flex-direction: row;
    //font-weight: ${props => props.theme.font.weight_2};
`