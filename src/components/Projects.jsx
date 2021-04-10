import React, { Fragment, useEffect, useState } from 'react';
import {
    CardSt, CardTitleSt, CardFooterSt, CardTextSt, CardSubtitleSt
} from './Styles';

import { CardBody } from 'reactstrap'

import { SectionNameSt, SectionSt, ASt } from './Styles'



const Project = ({ project }) =>
    <CardSt>
        <CardBody>
            <CardTitleSt>{project.name}</CardTitleSt>
            <CardSubtitleSt>{project.date}</CardSubtitleSt>
            <CardTextSt>{project.description}</CardTextSt>
            {project.links.map(link =>
                <CardFooterSt key={link.name}>
                    <ASt href={link.link}> {link.name} </ASt>
                </CardFooterSt>)}
        </CardBody>
    </CardSt>



export const Projects = ({ projects }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res1 = () => setWidth(width => window.innerWidth);
        window.addEventListener('resize', res1, false);
        return () => {
            window.removeEventListener('resize', res1, false);
        }
    });

    return <div id="projects">
        <SectionNameSt width={width}>Projects</SectionNameSt>
        <SectionSt width={width}>{projects.map((proj) => <Project project={proj} key={proj.name} />)}</SectionSt>
    </div>
}



export const NextProject = ({ nextProject }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res1 = () => setWidth(width => window.innerWidth);
        window.addEventListener('resize', res1, false);
        return () => {
            window.removeEventListener('resize', res1, false);
        }
    });

    return <div id="next-project">
        <SectionNameSt width={width}>Next Project</SectionNameSt>
        <SectionSt width={width}>
            <CardSt>
                <CardBody>
                    <CardTextSt>{nextProject.description}</CardTextSt>
                </CardBody>
            </CardSt>
        </SectionSt>
    </div>
}