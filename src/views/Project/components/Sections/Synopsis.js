import React, { Component } from 'react';
import Section from '../Section';

class Synopsis   extends Component {

    createMarkup() {
        return { __html: this.props.project.synopsis };
    }

    render() {
        return (
            <Section title="Synopsis">
                <div dangerouslySetInnerHTML={this.createMarkup()} />
            </Section>
        );
        
    }
}

export default Synopsis;