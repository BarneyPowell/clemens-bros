import React, { Component } from 'react';
import Styled from 'styled-components';

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

import Main from '../../shared/components/Main';




import Sections from './components/Sections';




const ProjectTitle = Styled.h1`
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-left: 1rem;
    flex: 0 0 auto;

    margin-bottom: 1rem;

    text-shadow: 1px 1px 1px black;
    span {
        font-weight: bold;
        font-size: 0.5em;
    }
`;





class ProjectView extends Component {

    state = {
        project: null
    };


    componentDidMount() {   
        const { id } = this.props.match.params;
        fetch(`/api/projects/${id}.json`, {
            method: 'GET'
        }).then((response) => response.json())
        .then((response) => {
            this.setState({
                project: response
            });
            
        });
    }

    renderNotFound() {
        return (
            <div>
            <Header/>
            <Main />
            <Footer />
        </div>
        );
    }

    renderSection(type, props) {

        const sectionType = typeof type === 'object'
            ? type.type
            : type;

        const settings = typeof type === 'object'
            ? type.settings
            : {
                shouldShowTitle: true
            };

        const section = Sections[sectionType];
        

        return React.createElement(section, { ...props, settings } );
    }

    render() {
        if(!this.state.project) return this.renderNotFound();

        const { project } = this.state;


        return (
            <div>
                <Header>
                    <ProjectTitle>{project.title}</ProjectTitle>
                </Header>
                <Main>

                    {project.sections.map((section, i) => this.renderSection(section, { key: section, project }))}

                </Main>
                <Footer />
            </div>
        );
    }
}

export default ProjectView; 