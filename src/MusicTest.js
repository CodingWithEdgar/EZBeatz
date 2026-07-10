import React, { useRef } from 'react';
import {returnCurrentTime} from './App';

const MusicTest = React.memo(
  function MusicTest(props) {
    // Per-instance audio state. Keeping these on refs (not module-level or
    // component-local vars) ensures each pad owns its own graph, so one pad's
    // sliders never reach another pad's nodes.
    const audioElementRef = useRef(null);
    if (audioElementRef.current === null) {
      audioElementRef.current = new Audio(props.src);
      audioElementRef.current.loop = true;
    }

    const audioCtxRef = useRef(null);
    const gainNodeRef = useRef(null);
    const panNodeRef = useRef(null);
    const freqNodeRef = useRef(null);

    // Idempotent lazy init: safe to call from any handler, in any order, any
    // number of times. createMediaElementSource is only ever called once per
    // element (calling it twice throws InvalidStateError).
    const ensureInit = () => {
        if (audioCtxRef.current) {
            return;
        }
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        const source = audioCtx.createMediaElementSource(audioElementRef.current);

        const gainNode = audioCtx.createGain();
        const panNode = audioCtx.createStereoPanner();
        const freqNode = audioCtx.createBiquadFilter();
        freqNode.type = "lowpass";

        // Series chain so every control actually affects the output:
        // source -> gain -> pan -> filter -> destination.
        source.connect(gainNode);
        gainNode.connect(panNode);
        panNode.connect(freqNode);
        freqNode.connect(audioCtx.destination);

        audioCtxRef.current = audioCtx;
        gainNodeRef.current = gainNode;
        panNodeRef.current = panNode;
        freqNodeRef.current = freqNode;
    }

    const updateGain = (e) => {
        ensureInit();
        gainNodeRef.current.gain.setValueAtTime(
            parseFloat(e.target.value), audioCtxRef.current.currentTime);
    }

    const updatePanner = (e) => {
        ensureInit();
        panNodeRef.current.pan.setValueAtTime(
            parseFloat(e.target.value), audioCtxRef.current.currentTime);
    }

    const updateFrequency = (e) => {
        ensureInit();
        // A lowpass filter's `gain` param is inert, so we only drive frequency.
        freqNodeRef.current.frequency.setValueAtTime(
            parseFloat(e.target.value), audioCtxRef.current.currentTime);
    }

    const syncCurrentTimePlay = () => {
        ensureInit();
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        audioElementRef.current.currentTime = returnCurrentTime();
        audioElementRef.current.play();
    }

    return (
      <div className="btn-group-vertical col">
        <button className="btn btn-dark rounded-circle icon-element" onClick={ensureInit}>
          <img
            className="rounded-circle"
            src={props.img}
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
            step="0.01"
            type="range"
            min="-3.4"
            max="3.4"
          />
        </span>
        <span className="btn btn-primary text-light">
          Filter
          <br></br>
          <input
            onChange={updateFrequency}
            type="range"
            min="0"
            max="22050"
          />
        </span>
        <button className="btn btn-light" onClick={syncCurrentTimePlay}>
          Play
        </button>
        <button className="btn btn-danger" onClick={() => audioElementRef.current.pause()}>
          Pause
        </button>
      </div>
    );

})

export default MusicTest;
