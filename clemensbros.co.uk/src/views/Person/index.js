import React, { Component } from 'react';
import Styled from 'styled-components';

import Header from '../../shared/components/Header';
import Main from '../../shared/components/Main';

const Footer = Styled.footer`
`;



class PersonView extends Component {


    constructor(props) {
        super(props);

        this.state = {
            person: null
        };
    }

    componentDidMount() {   
        const { id } = this.props.match.params;
        console.log(id);
        fetch(`/api/people/${id}.json`, {
            method: 'GET'
        }).then((response) => response.json())
        .then((response) => {
            this.setState({
                person: response
            });
            
        });
    }

    renderHeader(person) {
        if(person === null) return null;
        return (
            <h1>{person.name}</h1>
        );
    }

    render() {
        return (
            <div>
                <Header>
                    {this.renderHeader(this.state.person)}
                </Header>
                <Main>
                    <h2>About me</h2>
                    <p>
                    And this is where I go.
                    </p>
                </Main>
                <Footer>
                </Footer>
            </div>
        );
    }
}

export default PersonView; 