import React, { Component } from 'react';
import Styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';

const FooterElement = Styled.footer`
    padding-top: 2em;
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

        const socialLinksStyle = {
            "opacity": 0.5
        };

        return (
            <FooterElement>
                <SocialMediaLinks style={socialLinksStyle} />
                <Copyright>&copy; {(new Date().getFullYear())} Clemens Bros (all rights reserved)</Copyright>
            </FooterElement>
        );
    }
}

export default Footer;