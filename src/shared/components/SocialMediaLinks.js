import React from 'react';
import Styled from 'styled-components'
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    VimeoIcon
} from '../../shared/components/Icons';
import FlexList from './FlexList';

const IconList = FlexList.extend`
    justify-content: space-around;
`;

const IconItem = Styled.li`
    font-size: 2em;
    margin: 0.5em;
    span {
        display: none;
    }

    a:hover {
        color: #ff9900;
        
        svg {
            fill: #ffff99 !important;
        }
    }
`;

export default (props) => {
    
    return (
        <IconList style={props.style}>
            <IconItem><a href='https://twitter.com/clemensbros'><TwitterIcon /><span>Twitter</span></a></IconItem>
            <IconItem><a href='https://facebook.com/clemensbros'><FacebookIcon /><span>Facebook</span></a></IconItem>
            <IconItem><a href='https://instagram.com/clemensbros'><InstagramIcon /><span>Instagram</span></a></IconItem>
            <IconItem><a href='https://vimeo.com/clemensbros'><VimeoIcon /><span>Vimeo</span></a></IconItem>
        </IconList> 
    );
}

