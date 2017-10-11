import React, { Component } from "react";
import Crew from "../components/Sections/Crew";

export default class extends Component {

  static Key = 'crew';
  static Title = 'Crew';

  render() {

    return (
      <Crew project={this.props.project} shouldShowTitle={false} />
    );
  }
}
