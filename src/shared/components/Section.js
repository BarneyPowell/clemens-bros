import React from 'react';
import Styled from 'styled-components';

const Section = Styled.section`
    
    h2 {
        font-size: 0.75em;
        text-transform: uppercase;
        font-family: 'Quicksand', sans-serif;
        margin-left: 1rem;
    }

    p {
        margin: 1em;

        a {
            color: #cc6600;
            font-weight: bold;
        }
    }
`;

const Inner = Styled.div`
    max-width: 63.75em;
    margin: 0 auto;
`;

export default function section(props) {
    return (
        <Section>
            <Inner>
            {props.title ? <h2>{props.title}</h2> : null}
            {props.children}
            </Inner>
        </Section>
    );
}