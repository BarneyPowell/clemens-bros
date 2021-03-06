import React, { Component } from 'react';

import View from '../components/View';
import Synopsis from './Synopsis';


import Data from './data.json';

const sections = {
    'synopsis': Synopsis,
};

export default class extends Component 
{
    render() {

        const { section } = this.props.match.params;
        return <View 
            project={Data}
            sections={sections}
            activeSection={section} />;
    }
}