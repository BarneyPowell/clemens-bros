import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Screen = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0,0,0,0.4);
    display: flex;
`;

class LoadingScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    getChildContext() {
        return {
            setIsLoading: (isLoading) => {
                this.setState({
                    isLoading
                });
            }
        }
    }

    renderLoadingScreen() {
        return (
            <Screen>
                <div>IsLoading</div>
            </Screen>
        )
    }

    render() {

        const loadingScreen = this.state.isLoading
            ? this.renderLoadingScreen()
            : null;

        return (
            <div>
                {this.props.children}
                {loadingScreen}
            </div>

        );
    }
}

LoadingScreen.childContextTypes = {
    setIsLoading: PropTypes.func
}

export default LoadingScreen;