import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    flex: 0 0 auto;
    margin-bottom: 1rem;
`;

const Title = Styled.h1`
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-left: 1rem;
    font-size: 1.5em;


    text-shadow: 1px 1px 1px black;
    span {
        font-weight: bold;
        font-size: 0.5em;
    }
`;

const Subtitle = Styled.span`
    margin-left: 1rem;
    text-transform: uppercase;
    font-family: 'Quicksand', 'sans-serif';
    font-size: 0.8em;
    text-shadow: 1px 1px 1px black;
`;


export default function PersonTitle(props) {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
        </Wrapper>
    );
}