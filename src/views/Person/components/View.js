import React, { Component } from 'react';

import PersonHeader from './PersonHeader';

import Main from '../../../shared/components/Main';
import Footer from '../../../shared/components/Footer';



export default class extends Component {



    render() {

        return (
            <div>
                <PersonHeader {...this.props} title={this.props.title} />
                <Main>
                    {this.props.children}
                </Main>
                <Footer />
            </div>
        );
    }
}