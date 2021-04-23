import React from "react";
import MusicTest from './MusicTest';
import parkerClap1 from "./samples/Parker/claps.mp3";
import parkerHiHat1 from "./samples/Parker/hihat.mp3";
import parkerHiHats1 from "./samples/Parker/hihat2.mp3";
import parkerKick1 from "./samples/Parker/kick.mp3"
import parkerSnare1 from "./samples/Parker/snare.mp3"

const Parker = (props) => (
  <div className="row">
    <div className="col">{<MusicTest src={parkerClap1} />}</div>
    <div className="col">{<MusicTest src={parkerHiHat1} />}</div>
    <div className="col">{<MusicTest src={parkerHiHats1} />}</div>
    <div className="col">{<MusicTest src={parkerSnare1} />}</div>
    <div className="col">{<MusicTest src={parkerKick1} />}</div>
  </div>
);

export default Parker;
