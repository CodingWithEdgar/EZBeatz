import React from "react";
import Music from "./Music";
import parkerClap1 from "./samples/Parker/Claps/claps - set #1.wav";
import parkerClap2 from "./samples/Parker/Claps/claps - set #2.wav";
import parkerClap3 from "./samples/Parker/Claps/claps - set #3.wav";

import parkerHiHat1 from "./samples/Parker/Hi Hats/hi hat - set #1.wav";
import parkerHiHat2 from "./samples/Parker/Hi Hats/hi hat - set #2.wav";
import parkerHiHat3 from "./samples/Parker/Hi Hats/hi hat - set #3.wav";

import parkerHiHats1 from "./samples/Parker/Hi Hats 2/hi hat 2 - set #1.wav";
import parkerHiHats2 from "./samples/Parker/Hi Hats 2/hi hat 2 - set #2.wav";
import parkerHiHats3 from "./samples/Parker/Hi Hats 2/hi hat 2 - set #3.wav";

const Parker = (props) => (
  <div>
    <div className="row">
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerClap1}
            color="pink"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHat1}
            color="green"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHats1}
            color="red"
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
            audio={parkerClap2}
            color="pink"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHat2}
            color="green"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHats2}
            color="red"
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
            audio={parkerClap3}
            color="pink"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHat3}
            color="green"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={parkerHiHats3}
            color="red"
            text="Kick"
          />
        }
      </div>
    </div>
  </div>
);

export default Parker;
