import React, { Component } from "react";
import Section from "../components/Section";

export default class extends Component {
  static Key = "synopsis";
  static Title = "Synopsis";

  render() {
    return (
      <Section title="Synopsis">
        <p>
          Kidnapped and suffering the diabolical torturous ways of “The Crude
          Surgeon” for no known reason, Michael slips in and out of
          consciousness until he finds himself in safe hands...
        </p>
        <p>
          “Surgery” was conceived by Brian Clemens before he sadly passed away
          in January 2015. As a result “The Clemens Bros” made it their mission
          to bring his last vision to life to play tribute to their father and
          all his wonderful work.
        </p>
        <p>
          Brian’s last ever script was a feature he and his son Samuel had been
          working on together called “The Still” and “Surgery” was born out
          Brian’s truly ingenious mind as a way to help secure funding for “The
          Still”. If you’d like to know more about the feature or would like to
          help in bringing this project to life please check out our current
          projects for more information.
        </p>
      </Section>
    );
  }
}
