import React from "react";
import Music from "./Music";
import parkerClap1 from "./samples/Parker/claps.mp3";
import parkerHiHat1 from "./samples/Parker/hihat.mp3";
import parkerHiHats1 from "./samples/Parker/hihat2.mp3";
import parkerKick1 from "./samples/Parker/kick.mp3"
import parkerSnare1 from "./samples/Parker/snare.mp3"

const Parker = (props) => (
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
    <div className="col">
      {
        <Music
          seconds={props.seconds}
          audio={parkerSnare1}
          color="pink"
          text="Kick"
        />
      }
    </div>
    <div className="col">
      {
        <Music
          seconds={props.seconds}
          audio={parkerKick1}
          color="green"
          text="Kick"
        />
      }
    </div>
  </div>
);

export default Parker;
