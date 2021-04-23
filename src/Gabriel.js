import React from "react";
import MusicTest from './MusicTest';
import gabeKick1 from "./samples/Gabriel Set 1/808 kick.mp3";
import gabeBeep1 from "./samples/Gabriel Set 1/boop boop.mp3";
import gabeClaps1 from "./samples/Gabriel Set 1/claps.mp3";
import gabeShaker1 from "./samples/Gabriel Set 1/shaker.mp3";
import gabeToms1 from "./samples/Gabriel Set 1/toms.mp3";
import gabeHiHat1 from "./samples/Gabriel Set 1/hi hats.mp3";

const Gabriel = (props) => (
  <div>
    <div className="row">
      <div className="col">{<MusicTest src={gabeKick1} />}</div>
      <div className="col">{<MusicTest src={gabeBeep1} />}</div>
      <div className="col">{<MusicTest src={gabeClaps1} />}</div>
      <div className="col">{<MusicTest src={gabeHiHat1} />}</div>
      <div className="col">{<MusicTest src={gabeToms1} />}</div>
      <div className="col">{<MusicTest src={gabeShaker1} />}</div>
    </div>
  </div>
);

export default Gabriel;
