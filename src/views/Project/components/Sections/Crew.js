import React, { Component } from 'react';
import Styled from 'styled-components';
import Section from '../Section';
import FlexList from '../../../../shared/components/FlexList';

const CrewList = FlexList.extend`
    flex-direction: row;
    margin: 1em;
    justify-content: center;
`;

const CrewItem = Styled.li`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em;
    margin-top: 0;
    margin-bottom: 1em;
`;

const Role = Styled.span`
    flex: 0 0 auto;
    font-size: 0.8em;
`;

const Name = Styled.span`
flex: 0 0 auto;
`;




class Crew extends Component {
    render() {

        const title = this.props.shouldShowTitle
            ? "Crew"
            : "";

        return (
            <Section title={title}>
                <CrewList>
                
                {this.props.project.crew.map((item, i) => 
                    <CrewItem key={i}>
                        <Role>{item.role}</Role>
                        <Name>{item.name}</Name>
                    </CrewItem>
                )}
                </CrewList>
            </Section>
        );
        
    }
}

export default Crew;