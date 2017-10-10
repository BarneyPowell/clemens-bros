import React, { Component } from 'react';
import Styled from 'styled-components';

const FooterElement = Styled.footer`
    padding-top: 3em;
    height: 20vh;
    max-height: 20vh;
`;

const Copyright = Styled.div`
    text-align: center;
    opacity: 0.5;
    transition: opacity ease-in-out 0.4s;
    &:hover {
        opactiy: 1;
    }
`;

class Footer extends Component {
    render() {
        return (
            <FooterElement>
                <Copyright>&copy; {(new Date().getFullYear())} Clemens Bros (all rights reserved)</Copyright>
            </FooterElement>
        );
    }
}

export default Footer;