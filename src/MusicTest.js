import drumImg from "./images/drum_1in.jpg";
import React from 'react';
import nextId from "react-id-generator";
import {returnCurrentTime} from './App';

var audioCtx = null;
var gainNode = null;
var panNode = null;
var freqNode = null;

const MusicTest = React.memo(
  function MusicTest(props) {
    const audioElement =  new Audio(props.src);
    audioElement.loop = true;
    const id1 = nextId();
    const gainClassName = "gain-control-" + id1;
    const panClassName = "pan-control-" + id1;
    const filterClassName = "filter-control-" + id1;

    const initNodes = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        const source = audioCtx.createMediaElementSource(audioElement);
        source.connect(audioCtx.destination);

        // gain init
        gainNode = audioCtx.createGain();
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // pan init
        panNode = audioCtx.createStereoPanner();
        source.connect(panNode);
        panNode.connect(audioCtx.destination);  

        // filter init
        freqNode = audioCtx.createBiquadFilter();
        source.connect(freqNode);
        freqNode.connect(audioCtx.destination);
        freqNode.type = "lowpass";
    }

    const updateGain = () => {
        console.log(gainClassName);
        const gainSlider = document.getElementsByClassName(gainClassName)[0].value;
        gainNode.gain.setValueAtTime(parseFloat(gainSlider), audioCtx.currentTime);
    }

    const updatePanner = () => {
        const panSlider = document.getElementsByClassName(panClassName)[0].value;
        panNode.pan.setValueAtTime(parseFloat(panSlider), audioCtx.currentTime);
    }

    const updateFrequency = () => {
        const freqSlider = document.getElementsByClassName(filterClassName)[0].value;
        freqNode.frequency.setValueAtTime(freqSlider, audioCtx.currentTime);
        freqNode.gain.setValueAtTime(40, audioCtx.currentTime);
    }

     const syncCurrentTimePlay = () => {
      audioElement.currentTime = returnCurrentTime();
      audioElement.play();
     }
    

    return (
      <div className="btn-group-vertical col">
        <button className="btn btn-dark rounded-circle icon-element" onClick={initNodes}>
          <img
            className="rounded-circle"
            src={drumImg}
            alt="Drum"
            width="200"
            height="200"
          />
        </button>
        <span className="btn btn-info text-light">
          Panning
          <br></br>
          <input
            onChange={updatePanner}
            className={panClassName}
            step="0.01"
            type="range"
            min="-1"
            max="1"
          />
        </span>
        <span className="btn btn-warning text-light">
          Gain
          <br></br>
          <input
            onChange={updateGain}
            className={gainClassName}
            step="0.01"
            type="range"
            min="-1"
            max="1"
          />
        </span>
        <span className="btn btn-primary text-light">
          Filter
          <br></br>
          <input
            onChange={updateFrequency}
            className={filterClassName}
            type="range"
            min="0"
            max="22000"
          />
        </span>
        <button className="btn btn-light" onClick={syncCurrentTimePlay}>
          Play
        </button>
        <button className="btn btn-danger" onClick={() => audioElement.pause()}>
          Pause
        </button>
      </div>
    );

})

export default MusicTest;