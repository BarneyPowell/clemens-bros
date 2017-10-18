import React, { Component } from 'react';
import Section from '../../../shared/components/Section';

class Treatment extends Component {


    createMarkup() {
        return { __html: this.props.project.treatment };
    }

    render() {
        return (
            <Section title="Treatment / Concept">
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            </Section>
        );
        
    }
}

export default Treatment;