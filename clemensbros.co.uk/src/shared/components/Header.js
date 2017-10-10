import React, { Component } from 'react';
import Styled from 'styled-components';
import HeaderBar from './HeaderBar';

const HeaderElement = Styled.header`
    padding-top: 3.5em;
    background-color: rgba(255,255,255,0.2);
    height: 20vh;
    max-height: 20vh;
    display: flex;
    align-items: flex-end;
`;

class Header extends Component {
    render() {
        return (
            <HeaderElement>
                <HeaderBar />
                {this.props.children}
            </HeaderElement>
        );
    }
}

export default Header;