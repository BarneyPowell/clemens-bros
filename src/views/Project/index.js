import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../shared/components/AsyncComponent';

const ProjectComponents = {
    'surgery': asyncComponent(() => import('./Surgery')),
    'dress-rehearsal': asyncComponent(() => import('./DressRehearsal')),
    'the-still': asyncComponent(() => import('./TheStill')),
    'the-lighter': asyncComponent(() => import('./TheLighter'))
};


class ProjectView extends Component {

    render() {
        const { id } = this.props.match.params;
        return (
            <Switch>
                
                <Route
                    path={`${this.props.match.url}/:section`}
                    component={ProjectComponents[id]} />
                    <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/synopsis`} />
            </Switch>
        );
    }
}

export default ProjectView; 