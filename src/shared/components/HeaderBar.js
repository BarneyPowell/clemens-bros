import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const HeaderBar = Styled.nav`
    height: 3.5em;
    background-color: rgba(34,34,34,0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .--inner {
        display: flex;
        height: 100%;
        align-items: center;
        max-width: 63.75rem; // 1020px;
        margin: 0 auto;

        a {
            flex: 0 0 auto;
            color: inherit;
            text-decoration: none;
            transition: opacity ease-in-out 0.2s;
            &:hover {
                opacity: 0.8;
            }
        }
        
    }

`;

const LogoType = Styled.span`
    height: 2em;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0.5em;



    .cb-logo {
        flex: 0 0 auto;
        height: 100%;
        width: 3em;
        margin-right: 0.5em;
        margin-top: -0.5em;
    }

    span {
        flex: 0 0 auto;
        text-transform: uppercase;
        font-family: 'Quicksand', sans-serif;
        font-size:1.1em;
        letter-spacing: -0.1em;
    }
`;



export default function headerBar(props) {
    return (
        <HeaderBar>
        <div className='--inner'>
        <Link to='/'>
                <LogoType>

                        <Logo classes={['cb-logo--white']} />
                        <span>Clemens Bros</span>

                </LogoType>
                </Link>
        </div>
        </HeaderBar>
    );
};