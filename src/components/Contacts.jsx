import React, { useEffect, useState } from 'react';

import { SectionNameSt, SectionSt, ASt } from './Styles'

import {
    CardSt, CardTextSt
} from './Styles';

import { CardBody } from 'reactstrap'


export const Contacts = ({ contacts }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res1 = () => setWidth(width => window.innerWidth);
        window.addEventListener('resize', res1, false);
        return () => {
            window.removeEventListener('resize', res1, false);
        }
    });

    return <div id={"contacts"}>
        <SectionNameSt width={width}>Contact me!</SectionNameSt>
        <SectionSt width={width} align={"center"}>
            <CardSt>
                <CardBody>
                    {contacts.map((contact) =>
                        contact.link ?
                            <CardTextSt key={contact.type}><ASt href={contact.link}>{contact.content}</ASt></CardTextSt> :
                            <CardTextSt key={contact.type}>{contact.content}</CardTextSt>
                    )}
                </CardBody>
            </CardSt>
        </SectionSt>
    </div>
}

