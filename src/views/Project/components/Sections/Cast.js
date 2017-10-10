import React, { Component } from 'react';
import Styled from 'styled-components';
import FlexList from '../../../../shared/components/FlexList';
import Section from '../Section';

const CastList = FlexList.extend`
    flex-direction: column;
    margin: 1em;
`;

const CastLine = Styled.li`
    flex: 0 0 auto;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    line-height: ${props => props.isMultiLine ? '1.2em' : '2em'};
    margin-top: ${props => props.isNewSection ? '1.5em' : '0'} ;
`;

const Actor = Styled.span`
    flex: 0 0 auto;
    margin-left: 0.3em;
`;

const Character = Styled.span`
    flex: 0 0 auto;
    margin-right: 0.3em;
    font-size: 0.8em;
`;

const Spacer = Styled.span`
    flex: 0 1 auto;
    width: 100%;
    border-bottom: 1px dotted #999;
    margin-bottom: 3px;
`;


class Cast extends Component {

    renderMultiLineCastLine(item, i) {

        // render the first one.
        const lines = [];

        lines.push(<CastLine key={`${i}.0`} isNewSection={item.isNewSection} isMultiLine>
            <Character>{item.role}</Character>
            <Spacer />
            <Actor>{item.person[0]}</Actor>
        </CastLine>);

        for(let j = 1; j < item.person.length; j++) {
            lines.push(<CastLine key={`${i}.${j}`} isMultiLine>

                <Actor>{item.person[j]}</Actor>
            </CastLine>);
        }

        return lines;
    }

    renderCastLine(item, i) {

        if(typeof item.person === 'object' && item.person.length > 1) {
            return this.renderMultiLineCastLine(item, i);
        }

        return (
            <CastLine key={i} isNewSection={item.isNewSection}>
            <Character>{item.role}</Character>
            <Spacer />
            <Actor>{item.person}</Actor>
        </CastLine> 
        );
    }

    render() {
        return (
            <Section title="Cast">
                <CastList>
                    {this.props.project.cast.map(this.renderCastLine.bind(this))}
                </CastList>
            </Section>
        );
        
    }
}

export default Cast;