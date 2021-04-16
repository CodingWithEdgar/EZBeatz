import React from "react";
import Music from "./Music";
import gabeKick1 from "./samples/Gabriel Set 1/808 kick.mp3";
import gabeBeep1 from "./samples/Gabriel Set 1/boop boop.mp3";
import gabeClaps1 from "./samples/Gabriel Set 1/claps.mp3";
import gabeShaker1 from "./samples/Gabriel Set 1/shaker.mp3";
import gabeToms1 from "./samples/Gabriel Set 1/toms.mp3";
import gabeHiHat1 from "./samples/Gabriel Set 1/hi hats.mp3";

const Gabriel = (props) => (
    <div>
      <div className="row">
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeKick1}
              color="pink"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeBeep1}
              color="green"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeClaps1}
              color="red"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeHiHat1}
              color="yellow"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeToms1}
              color="purple"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeShaker1}
              color="orange"
              text="Kick"
            />
          }
        </div>
      </div>
    </div>

);

export default Gabriel;
