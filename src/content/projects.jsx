
import React from 'react';
import { ASt } from '../components/Styles';

export const projects = [
    {
        name: "AlapcaFs",
        description:
            <div>
                AlpacaFs is an F# <ASt href={"https://alpaca.markets/"}>Alpaca</ASt> client API to algorithmically trade US equities.
                The library is functional first; thus, during the development of the library, I learned functional paradigms as well as
                F# best design practices. I will be using the library to backtest, paper-trade,
                and live-trade US stocks utilizing statistical methods.
            </div>,
        date: "2020 October",
        links: [{ name: "Github", link: "https://github.com/Qaysi-M/AlpacaFs" }, { name: "Alpaca", link: "https://alpaca.markets/" }]
    },
    {
        name: "Xyla",
        description: "Xyla is an implementation of the original Rouge game. " +
            "I have developed it using C++ and a simple graph user interface library. During the development, " +
            "I learned about computational geometry and delaunay triangulation which I optimally implemented in the project.",
        date: "2020 October",
        links: [{ name: "Github", link: "https://github.com/Qaysi-M/Xyla" }]
    },
    {
        name: "Portfolio",
        description: "A website made using React for the UI, Reactstrap for responsivity, Styled-Components for styling, "
            + "and React-Spring for animations. As a result, the website is easily maintained, conveniently updated, "
            + "and smoothly navigated on various devices.",
        date: "2020 December",
        links: []
    }
]



export const nextProject = {
    description: "I am currently working on an e-commerce product using ReasonML React native with a backend using .NET. "
        + "At the same time, I am learning statistical methods and applying them in trading. Stay tuned!",
}


