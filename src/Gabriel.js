import React from "react";
import Music from "./Music";
import gabeKick1 from "./samples/Gabriel Set 2/808 kick.wav";
import gabeBeep1 from "./samples/Gabriel Set 2/beep beep.wav";
import gabeClaps1 from "./samples/Gabriel Set 2/claps.wav";
import gabeShaker1 from "./samples/Gabriel Set 2/shaker and bell.wav";
import gabeToms1 from "./samples/Gabriel Set 2/toms and claps.wav";
import gabeHiHat1 from "./samples/Gabriel Set 2/triplet hi hats.wav";

import gabeAccents2 from "./samples/Gabriel Set 1/accents.wav";
import gabeDisKick2 from "./samples/Gabriel Set 1/distorted kick and snare.wav";
import gabeHiHat2 from "./samples/Gabriel Set 1/halftime hi hats.wav";
import gabeKick2 from "./samples/Gabriel Set 1/halftime kick.wav";
import gabeHiHatClap2 from "./samples/Gabriel Set 1/hi hats and claps.wav";
import gabeClaps2 from "./samples/Gabriel Set 1/kicks n claps.wav";
import gabeKicks2 from "./samples/Gabriel Set 1/quarter note kicks.wav";

import gabeDelay3 from "./samples/Gabriel set 3/halftime delay.wav";
import gabeHiHat3 from "./samples/Gabriel set 3/just hi hats.wav";
import gabeKick3 from "./samples/Gabriel set 3/just kick.wav";
import gabeSnare3 from "./samples/Gabriel set 3/just snare.wav";
import gabeRide3 from "./samples/Gabriel set 3/Ride pattern.wav";
import gabeTom3 from "./samples/Gabriel set 3/tom snare and kick.wav";
import gabeBlock3 from "./samples/Gabriel set 3/wood blocks.wav";

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

      <div className="row">
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeAccents2}
              color="pink"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeDisKick2}
              color="green"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeHiHat2}
              color="red"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeKick2}
              color="yellow"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeHiHatClap2}
              color="purple"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeClaps2}
              color="orange"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeKicks2}
              color="green"
              text="Kick"
            />
          }
        </div>
      </div>


      <div className="row">
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeDelay3}
              color="pink"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeHiHat3}
              color="green"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeKick3}
              color="red"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeSnare3}
              color="yellow"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeRide3}
              color="purple"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeTom3}
              color="orange"
              text="Kick"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              seconds={props.seconds}
              audio={gabeBlock3}
              color="green"
              text="Kick"
            />
          }
        </div>
      </div>
    </div>

);

export default Gabriel;
