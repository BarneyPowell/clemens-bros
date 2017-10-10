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
    }
`;

export default function section(props) {
    return (
        <Section>
            <h2>{props.title}</h2>
            {props.children}
        </Section>
    );
}