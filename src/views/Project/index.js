import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingScreen from '../../shared/components/LoadingScreen';
import asyncComponent from '../../shared/components/AsyncComponent';

const ProjectComponents = {
    'surgery': asyncComponent(() => import('./Surgery'), LoadingScreen),
    'dress-rehearsal': asyncComponent(() => import('./DressRehearsal'), LoadingScreen),
    'the-still': asyncComponent(() => import('./TheStill'), LoadingScreen),
    'the-lighter': asyncComponent(() => import('./TheLighter'), LoadingScreen),
    'say-no': asyncComponent(() => import('./SayNo'), LoadingScreen)
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