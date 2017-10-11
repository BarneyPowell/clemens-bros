import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Styled from 'styled-components';

import ProjectHeader from './ProjectHeader';
import SectionNav from './SectionNav';

import Main from '../../../shared/components/Main';
import Footer from '../../../shared/components/Footer';

const FlexList = Styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
`;

const NavItem = ({label, to}) => (
    <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )} />
);



export default class extends Component {

    renderSectionNav(sections) {
        return (
            <SectionNav>
                <FlexList>
                    {sections.map((section, index) => 
                        <NavItem key={section} to={`/projects/${this.props.project.id}/${section}`} label={this.props.sections[section].Title} />
                    )}
                    <li key='spacer'>&nbsp;</li>
                </FlexList>
            </SectionNav>
        );
    }

    render() {
        const sections = [];

        for(let section in this.props.sections) {
            sections.push(section);
        }

        if(sections.indexOf(this.props.activeSection) < 0) {
            return (
                <Redirect to={`/projects/${this.props.id}/synopsis`} />
            )
        }

        const Section = this.props.sections[this.props.activeSection];

        return (
            <div>
                <ProjectHeader {...this.props} title={this.props.project.title} />
                <Main>
                    {this.renderSectionNav(sections)}
                    <Section {...this.props} />
                </Main>
                <Footer />
            </div>
        );
    }
}