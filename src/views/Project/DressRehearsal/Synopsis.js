import React, { Component } from "react";
import Section from '../../../shared/components/Section';

export default class extends Component {

    static Key = 'synopsis';
    static Title = 'Synopsis';

  render() {
    return (
      <Section title="Synopsis">
        <p>
          Bella, Lionel, Kit and Steph are “The Overtones”. An operatic touring
          troupe, perfoming their show above a London pub. The dressing room is
          rife with tension and talent but the show must go on.
        </p>
        <p>
          Meanwhile, on the streets of London, Micky, a homeless man must battle
          his way through an unbearable evening, only to discover “The
          Overtones” are playing and a once special someone is performing.
        </p>
        <p>What will happen when their paths inevitably collide?</p>
        <p>
          Featuring music from ‘La Traviata’, ‘Carmen’, ‘The Barber of Seville’,
          ‘The Marriage of Figaro’ and ‘The Mikado’; this is a film adaptation
          of A.J. Evans’ play of the same name. Written by A.J. Evans and Samuel
          Clemens and directed by the Clemens Bros. Produced by Natasha
          Marburger of Beyond Illusion Pictures in conjunction with Sarastro
          Productions ltd.
        </p>
      </Section>
    );
  }
}
