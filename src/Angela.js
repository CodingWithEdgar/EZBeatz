import React from "react";
import Music from "./Music";
import Bass from "./samples/Angela/BassDrum.mp3";
import Claves from "./samples/Angela/Claves.mp3";
import Tamborine from "./samples/Angela/Tambourine.mp3";
import Triangle from "./samples/Angela/Triangle.mp3";
import Wood from "./samples/Angela/WoodBlocks.mp3";

import Claps from "./samples/Angela/Second/Claps.mp3";
import Drumloop from "./samples/Angela/Second/DrumLoop.mp3";
import Slaps from "./samples/Angela/Second/Slaps.mp3";
import Snare from "./samples/Angela/Second/Snare.mp3";
import Stomp from "./samples/Angela/Second/Stomp.mp3";





const Angela = (props) => (
  <div>
    <div className="row">
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Bass}
            color="pink"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Claves}
            color="green"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Tamborine}
            color="red"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Triangle}
            color="yellow"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Wood}
            color="purple"
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
            audio={Claps}
            color="pink"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Drumloop}
            color="green"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Slaps}
            color="red"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Snare}
            color="yellow"
            text="Kick"
          />
        }
      </div>
      <div className="col">
        {
          <Music
            seconds={props.seconds}
            audio={Stomp}
            color="purple"
            text="Kick"
          />
        }
      </div>
    </div>
  </div>
);

export default Angela;
