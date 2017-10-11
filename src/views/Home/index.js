import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Section from './components/Section';
import Logo from '../../shared/components/Logo';
import ProjectPosters from '../../shared/assets/posters';


import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    VimeoIcon
} from '../../shared/components/Icons';

import projects from '../Project/projects.json';

const Title = styled.div`
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    font-size: 2.5em;
    letter-spacing: -0.1em;
    margin-top: 1em;
`;

const FlexSection = styled.section`
    display: flex;

`;

const FlexList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
`;

const ProjectList = FlexList.extend`
    justify-content: space-around;
`;

const ProjectItem = styled.li`
    flex: 0 0 auto;
    display: block;
    background-image: ${props => `url(${ProjectPosters[props.project.id]})`} ;
    background-size: cover;
    width: 40%;
    margin-bottom: 8%;

    a {
        display:block;
        padding-bottom: 141.43%;
        width: 100%;
        background-color: transparent;
        position: relative;

        span {
            position: absolute;
            top: 0;
            left: 0;
            display: none;
        }
    }

    @media (min-width: 48em) {
        width: 20%;
    }

`;

const PersonList = FlexList.extend`
    justify-content: space-around;
    margin-bottom: 1em;
`;

const PersonItem = styled.li`
    margin-bottom: 1em; 
    overflow: auto;
    text-align: center;
    .avatar {
        display:block;
        width: 40vw;
        height: 40vw;
            background-color: blue;
        border-radius: 50%;
    }

    @media(min-width: 48em) {
        
    }
`;

const IconList = FlexList.extend`
    justify-content: center;
`;

const IconItem = styled.li`
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

const CoverSection = FlexSection.extend`
    height: 80vh;
    min-height: 80vh;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;



const people = [
    {
        key: 'samuel-clemens',
        name: 'Samuel Clemens'
    },
    {
        key: 'george-clemens',
        name: 'George Clemens'
    },
    {
        key: 'brian-clemens',
        name: 'Brian Clemens OBE'
    },
]

class Home extends Component {
    render() {

        const logoStyle = {
            maxWidth: '60vw',
            maxHeight: '50%'
        };

        return (
            <div>
            <CoverSection>
                <Logo style={logoStyle} classes={['cb-logo--white']} />
                <Title>Clemens Bros</Title>
            </CoverSection>
            <Section highlight>
                <IconList>
                    <IconItem><a href='https://twitter.com/clemensbros'><TwitterIcon /><span>Twitter</span></a></IconItem>
                    <IconItem><a href='https://facebook.com/clemensbros'><FacebookIcon /><span>Facebook</span></a></IconItem>
                    <IconItem><a href='https://instagram.com/clemensbros'><InstagramIcon /><span>Instagram</span></a></IconItem>
                    <IconItem><a href='https://vimeo.com/clemensbros'><VimeoIcon /><span>Vimeo</span></a></IconItem>
                </IconList>
            </Section>
            <Section light>
            <h1>Our work</h1>
            <ProjectList>
                {projects.map((project, i) => (
                    <ProjectItem project={project} key={project.id}><Link to={`/projects/${project.id}`}><span>{project.name}</span></Link></ProjectItem>
                ))}
            </ProjectList>
            </Section>
            <Section light>
            <h1>Us</h1>
                <PersonList>
                    {people.map((person, i) => (
                        <PersonItem key={person.key}>
                            <Link to={`/people/${person.key}`}>
                                <span className='avatar' />
                                <span className='name'>{person.name}</span>
                            </Link>
                        </PersonItem>
                    ))}
                </PersonList>
            </Section>
            <Section>
            <h1>Contact</h1>
            <p>If you are interested in one of our projects, or working with us on one of your projects, please get in touch. We are very enthusiastic, approachable guys, who believe in building strong relationships with artists and technicians alike. If you wish to request a script or any materials, please email us on the address below.</p>
            <p>We look forward to hearing from you soon.</p>
            <p>Sam &amp; George.<br /><a href="mailto:clemensbros@gmail.com">clemensbros@gmail.com</a></p>
            <h2>Telephone</h2>
            <p>
                Main <b>+44 (0) 20 7402 4048</b><br />
                Samuel Clemens <b>+44 (0) 7989 605 401</b><br />
                George Clemens <b>+44 (0) 7739 412 501</b>
            </p>
            <h2>Address</h2>
            <p>
                5 Talbot Square<br />
                Sussex Gardens<br />
                London, W2 1TR<br />
                United Kingdom
            </p>
            </Section>
            </div>
 
            
        );
    }
}

export default Home;