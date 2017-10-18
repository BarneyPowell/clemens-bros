import React, { Component } from "react";
import Styled from "styled-components";
import Section from "../../../shared/components/Section";

import PosterImageUrl from "./assets/portrait-poster.png"

const Poster = Styled.img`
  width: 100%;
  display: inherit;
`;


export default class extends Component {
  static Key = "poster";
  static Title = "Poster";

  render() {
    return (
      <Section>
        <Poster src={PosterImageUrl} alt='Poster for The Still' />
      </Section>
    );
  }
}
