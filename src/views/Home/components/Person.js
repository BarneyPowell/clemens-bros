import React, { Component} from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';


const PersonItem = Styled.li`
    margin-bottom: 1em; 
    overflow: auto;
    text-align: center;
    .avatar {
        display:block;
        width: 40vw;
        height: 40vw;
        background-image: ${props => `url(${props.avatarUrl})`};
        background-size: cover;
        border-radius: 50%;
    }

    @media(min-width: 48em) {
        
    }
`;


export default class extends Component {
    render() {
        return (
            <PersonItem avatarUrl={this.props.avatarUrl}>
                <Link to={`/people/${this.props.id}`}>
                    <span className='avatar' />
                    <span className='name'>{this.props.name}</span>
                </Link>
            </PersonItem>
        );
    }
}