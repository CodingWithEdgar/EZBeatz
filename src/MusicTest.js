import React, { useRef, useState } from 'react';

// Bootstrap-Icons play-fill / pause-fill glyphs, inlined so we don't pull in a
// whole icon font for two shapes.
const PlayPauseIcon = ({ playing }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    {playing ? (
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
    ) : (
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    )}
  </svg>
);

// Value formatters for the slider readouts.
const fmtGain = (v) => `${v.toFixed(1)}`;
const fmtPan = (v) =>
  v === 0 ? "C" : v < 0 ? `L${Math.round(-v * 100)}` : `R${Math.round(v * 100)}`;
const fmtFreq = (v) =>
  v >= 1000 ? `${(v / 1000).toFixed(1)} kHz` : `${Math.round(v)} Hz`;

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

    const [isPlaying, setIsPlaying] = useState(false);
    const [gain, setGain] = useState(1);
    const [pan, setPan] = useState(0);
    const [freq, setFreq] = useState(22050);

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
        // Start fully open (transparent) so the sound is unfiltered until the
        // user lowers the cutoff. The node's own default is 350 Hz, which would
        // otherwise muffle everything while the slider sits at the top.
        freqNode.frequency.value = 22050;

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
        const v = parseFloat(e.target.value);
        setGain(v);
        gainNodeRef.current.gain.setValueAtTime(v, audioCtxRef.current.currentTime);
    }

    const updatePanner = (e) => {
        ensureInit();
        const v = parseFloat(e.target.value);
        setPan(v);
        panNodeRef.current.pan.setValueAtTime(v, audioCtxRef.current.currentTime);
    }

    const updateFrequency = (e) => {
        ensureInit();
        const v = parseFloat(e.target.value);
        setFreq(v);
        // A lowpass filter's `gain` param is inert, so we only drive frequency.
        freqNodeRef.current.frequency.setValueAtTime(v, audioCtxRef.current.currentTime);
    }

    const togglePlay = () => {
        ensureInit();
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        if (isPlaying) {
            audioElementRef.current.pause();
            setIsPlaying(false);
        } else {
            audioElementRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
      <div
        className={`pad${isPlaying ? " is-playing" : ""}`}
        style={{ "--pad-rgb": props.accent || "124, 92, 255" }}
      >
        <button
          className="pad-trigger"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          title={isPlaying ? "Pause" : "Play"}
        >
          <PlayPauseIcon playing={isPlaying} />
        </button>
        <div className="pad-label">{props.label}</div>

        <div className="pad-controls">
          <div className="ctl">
            <div className="ctl-row">
              <span>Gain</span>
              <span className="ctl-val">{fmtGain(gain)}</span>
            </div>
            <input
              type="range"
              min="-3.4"
              max="3.4"
              step="0.01"
              value={gain}
              onChange={updateGain}
            />
          </div>

          <div className="ctl">
            <div className="ctl-row">
              <span>Pan</span>
              <span className="ctl-val">{fmtPan(pan)}</span>
            </div>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              value={pan}
              onChange={updatePanner}
            />
          </div>

          <div className="ctl">
            <div className="ctl-row">
              <span>Tone</span>
              <span className="ctl-val">{fmtFreq(freq)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="22050"
              value={freq}
              onChange={updateFrequency}
            />
          </div>
        </div>
      </div>
    );

})

export default MusicTest;
