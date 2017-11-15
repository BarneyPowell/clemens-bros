import React, { Component } from 'react';
import Styled from 'styled-components';
import HeaderBar from './HeaderBar';

const HeaderElement = Styled.header`
    padding-top: 3.5em;
    background-color: rgba(255,255,255,0.2);
    display: flex;
    align-items: flex-end;
`;

const HeaderOuter = Styled.div`
    width: 100%;
    max-width: 63.75rem; // 1020px
    margin: 0 auto;
`;

const HeaderInner = Styled.div`
    width: 100%;
    padding-bottom: 42%;
    position: relative;
    background-size: cover;
`;

const HeaderWrapper = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;

`;

class Header extends Component {
    render() {


        const headerStyle = {
            backgroundImage: `url(${this.props.headerBackgroundImage})`
        }

        return (
            <HeaderElement>
                <HeaderBar />
                <HeaderOuter>
                    <HeaderInner style={headerStyle}>
                        <HeaderWrapper>
                            {this.props.children}
                        </HeaderWrapper>
                    </HeaderInner>
                </HeaderOuter>
            </HeaderElement>
        );
    }
}

export default Header;