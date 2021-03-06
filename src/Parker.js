import React from "react";
import MusicTest from "./MusicTest";
import parkerClap1 from "./samples/Parker/claps.mp3";
import parkerHiHat1 from "./samples/Parker/hihat.mp3";
import parkerHiHats1 from "./samples/Parker/hihat2.mp3";
import parkerKick1 from "./samples/Parker/kick.mp3";
import parkerSnare1 from "./samples/Parker/snare.mp3";
import kickImg from "./images/KickRed.jpg";
import clapImg from "./images/ClapPink.jpg";
import hihatImg from "./images/HiHatPurple.jpg";
import snare from "./images/SnareOrange.jpg";

const Parker = (props) => (
  <div className="row">
    <div className="col">{<MusicTest img={clapImg} src={parkerClap1} />}</div>
    <div className="col">{<MusicTest img={hihatImg} src={parkerHiHat1} />}</div>
    <div className="col">{<MusicTest img={hihatImg} src={parkerHiHats1} />}</div>
    <div className="col">{<MusicTest img={snare} src={parkerSnare1} />}</div>
    <div className="col">{<MusicTest img={kickImg} src={parkerKick1} />}</div>
  </div>
);

export default Parker;
