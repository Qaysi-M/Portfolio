
import React from 'react';
import { ASt } from '../components/Styles';

export const projects = [
    {
        name: "AlapcaFs",
        description:
            <div>
                AlpacaFs is an F# <ASt href={"https://alpaca.markets/"}>Alpaca</ASt> client API to algorithmically trade US equities.
                The library is functional first; thus, it is a good choice for F# developers who like to programmatically trade US securities.
            </div>,
        date: "2021 March",
        links: [{ name: "Github", link: "https://github.com/Qaysi-M/AlpacaFs" }, { name: "Alpaca", link: "https://alpaca.markets/" }]
    },
    {
        name: "Xyla",
        description:
            <div>
                Xyla is an implementation of the original Rouge game. It was developed using C++ and a simple graph user interface library.
                The game is efficiently built due to my efficient implementation of the delaunay triangulation.
            </div>,
        date: "2020 October",
        links: [{ name: "Github", link: "https://github.com/Qaysi-M/Xyla" }]
    },
    {
        name: "Portfolio",
        description:
            <div>
                A website made using React for the UI, Reactstrap for responsivity, Styled-Components for styling,
                and React-Spring for animations. As a result, the website is easily maintained, conveniently updated,
                and smoothly navigated on various devices.
            </div>,
        date: "2020 December",
        links: []
    }
]



export const nextProject = {
    description: "I am currently working on an e-commerce product using ReasonML React native with a backend using .NET. "
        + "At the same time, I am learning statistical methods and applying them in trading. Stay tuned!",
}


