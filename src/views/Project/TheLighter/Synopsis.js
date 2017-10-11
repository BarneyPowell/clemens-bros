import React, { Component } from "react";
import Section from "../components/Section";

export default class extends Component {
  static Key = "synopsis";
  static Title = "Synopsis";

  render() {
    return (
      <Section title="Synopsis">
        <p>
          The Lighter explores the notion of fate. Is our path pre-ordained or
          do we have a choice in the directions we take?
        </p>
        <p>
          The Lighter, voiced by Joanna Lumley, is the story of a lighter that
          is dropped in and out of the lives of a variety of characters, amongst
          being; a homeless man, a French Chef, an arsonist, to a Hit man
          suffering from toothache. Each owner of the lighter find themselves in
          a moral dilemma and depending on the choice each owner makes; their
          fate is either inflicted or bestowed upon them.
        </p>
        <p>
          Each time the lighter changes hands, the genre of film style changes.
          There are seven stories exploring seven genres, ranging from a
          romantic comedy to a film noir. All of them connected by the lighter.
          As life is not one simple character arc and more a collection of
          moments, we explore this, by finding our lead character witnessing
          life changing moments for the characters involved in the film.
        </p>
      </Section>
    );
  }
}
