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
import kickImg from "./images/KickRed.jpg";
import clapImg from "./images/ClapPink.jpg";
import hihatImg from "./images/HiHatPurple.jpg";
import snareImg from "./images/SnareOrange.jpg";
import shaker from "./images/ShakerGrey.jpg";
import beep from "./images/BeepLightBlue.jpg";
import triangle from "./images/GreenTriangle.jpg";
import woodBlock from "./images/woodblock.jpg";
import stompImg from "./images/StompYellow.jpg";

const Angela = (props) => (
  <div>
    <div className="row">
      <div className="col">{<MusicTest img={kickImg} src={Bass} />}</div>
      <div className="col">{<MusicTest img={beep} src={Claves} />}</div>
      <div className="col">{<MusicTest img={shaker} src={Tamborine} />}</div>
      <div className="col">{<MusicTest img={triangle} src={Triangle} />}</div>
      <div className="col">{<MusicTest img={woodBlock} src={Wood} />}</div>
    </div>

    <div className="row">
      <div className="col">{<MusicTest img={clapImg} src={Claps} />}</div>
      <div className="col">{<MusicTest img={kickImg} src={Drumloop} />}</div>
      <div className="col">{<MusicTest img={hihatImg} src={Slaps} />}</div>
      <div className="col">{<MusicTest img={snareImg} src={Snare} />}</div>
      <div className="col">{<MusicTest img={stompImg} src={Stomp} />}</div>
    </div>
  </div>
);

export default Angela;
