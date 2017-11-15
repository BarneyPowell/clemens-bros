import React, { Component } from "react";
import PropTypes from 'prop-types';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {

      this.context.setIsLoading(true);
      const { default: component } = await importComponent();
      this.context.setIsLoading(false);

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;


      return C ? <C {...this.props} /> : null;
    }
  }

  AsyncComponent.contextTypes = {
    setIsLoading: PropTypes.func
  }

  return AsyncComponent;
}