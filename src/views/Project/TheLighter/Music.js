import React, { Component } from "react";
import Section from "../../../shared/components/Section";

export default class extends Component {
  static Key = "music";
  static Title = "Music";

  render() {
    return (
      <Section>
        <p>
          The music for “The Lighter” has been written and composed by the
          extremely talented <a href="http://www.alphadogmusic.co.uk" target="_blank" rel="noopener noreferrer">Edward White</a>. He has composed scores for dramatic
          feature films that include, Beautiful Wave (starring Aimee Teegarden &
          Lance Henriksen), Nine Lives (starring Amelia Warner & Paris Hilton) &
          Indak (starring Patrick Bergin). Not to mention numerous commercials
          such as the forthcoming 3D Toshiba Touch Points campaign and
          feature-length documentaries such as ‘In search of David Jones.’
        </p>
        <p>
          Edward has provided a wonderfully varied and emotional score for ‘The
          Lighter’, ranging from hints of ‘James Bond’ to the romantic melodies
          of ‘John Williams’.
        </p>
      </Section>
    );
  }
}
