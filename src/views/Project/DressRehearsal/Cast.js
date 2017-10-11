import React, { Component } from "react";
import Cast from "../components/Sections/Cast";

export default class extends Component {

  static Key = 'cast';
  static Title = 'Cast';

  render() {
    return (
      <Cast project={this.props.project} />
    );
  }
}
