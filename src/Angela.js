import React from "react";
import MusicTest from "./MusicTest";
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
      <div className="col">{<MusicTest src={Bass} />}</div>
      <div className="col">{<MusicTest src={Claves} />}</div>
      <div className="col">{<MusicTest src={Tamborine} />}</div>
      <div className="col">{<MusicTest src={Triangle} />}</div>
      <div className="col">{<MusicTest src={Wood} />}</div>
    </div>

    <div className="row">
      <div className="col">{<MusicTest src={Claps} />}</div>
      <div className="col">{<MusicTest src={Drumloop} />}</div>
      <div className="col">{<MusicTest src={Slaps} />}</div>
      <div className="col">{<MusicTest src={Snare} />}</div>
      <div className="col">{<MusicTest src={Stomp} />}</div>
    </div>
  </div>
);

export default Angela;
