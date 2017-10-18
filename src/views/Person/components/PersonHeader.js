import React from 'react';
import PersonTitle from './PersonTitle';
import Header from '../../../shared/components/Header';

export default function section(props) {
    console.log(props);
    return (
        <Header {...props}>
            <PersonTitle title={props.title} subtitle={props.subtitle} />
        </Header>
    );
}