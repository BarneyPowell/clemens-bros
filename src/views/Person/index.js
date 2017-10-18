import React, { Component } from 'react';

import asyncComponent from '../../shared/components/AsyncComponent';

const PersonComponents = {
    'brian-clemens': asyncComponent(() => import('./BrianClemens')),
    'samuel-clemens': asyncComponent(() => import ('./SamClemens')),
    'george-clemens': asyncComponent(() => import('./GeorgeClemens'))
};





class PersonView extends Component {


    constructor(props) {
        super(props);

        this.state = {
            person: null
        };
    }





    render() {
        const { id } = this.props.match.params;
       
        const Component = PersonComponents[id];
        return (
            <Component />
        );
    }
}

export default PersonView; 