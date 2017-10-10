import React, { PureComponent } from 'react';
import Styled from 'styled-components';


const OuterSection = Styled.section`
    overflow: auto;
    position: relative;
    padding-left: 1em;
    padding-right: 1em;
    background-color: ${props => props.light ? '#eee' : props.highlight ? 'rgba(255,255,255,0.1)' : 'transparent' };
    color: ${props => props.light ? '#222' : 'inherit' };

    h1, h2 {
        font-weight: normal;
        text-transform: lowercase;
        &:after {
            content: '.'
        }
    }

    a {
        color: ${props => props.light ? '#222' : '#ff9' };
    }

`;

const InnerSection = Styled.div`
    max-width: 63.75em;
    margin: 0 auto;
`;

class Section extends PureComponent {
    render() {
        return (
            <OuterSection {...this.props}>
                <InnerSection>
                    {this.props.children}
                </InnerSection>
            </OuterSection>
        );
    }
}

export default Section;