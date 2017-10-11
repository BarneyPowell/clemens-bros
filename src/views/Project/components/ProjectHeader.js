import React from 'react';
import ProjectTitle from './ProjectTitle';
import Header from '../../../shared/components/Header';

export default function section(props) {
    return (
        <Header>
            <ProjectTitle>{props.title}</ProjectTitle>
        </Header>
    );
}