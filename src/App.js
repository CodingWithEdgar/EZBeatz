import "./App.css";
import React, { useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Gabriel from './Gabriel';
import Parker from './Parker';
import Angela from './Angela';
import kick from "./samples/Gabriel Set 1/808 kick.mp3"

const audioElement =  new Audio(kick);
audioElement.loop = true;

const returnCurrentTime = () => audioElement.currentTime;

function App() {
  // Tracks whether the audio graph has been wired up. createMediaElementSource
  // may only be called once per element, so re-clicking Start must not re-init.
  const startedRef = useRef(false);

  const afunc = () => {
    if (startedRef.current) {
      audioElement.play();
      return;
    }
    startedRef.current = true;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    // source -> gain -> destination (single path, so the gain actually applies).
    const source = audioCtx.createMediaElementSource(audioElement);
    const gainNode = audioCtx.createGain();
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = 1;

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    audioElement.play();
  }

  return (
    <div>
      <h3>
        To get started, click{" "}
        <button className="btn btn-primary" onClick={afunc}>
          Start
        </button>
        , then choose a sample pack above.
      </h3>
      <h3>
        To play a sound, first click on an icon, then its associated play
        button.
      </h3>
      <br></br>
      <Switch>
        <Route path="/gabriel">
          <Gabriel />
        </Route>
        <Route path="/parker">
          <Parker />
        </Route>
        <Route path="/angela">
          <Angela />
        </Route>
      </Switch>
    </div>
  );
}
export {returnCurrentTime};
export default App;
