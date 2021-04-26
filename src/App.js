import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Gabriel from './Gabriel';
import Parker from './Parker';
import Angela from './Angela';
import kick from "./samples/Gabriel Set 1/808 kick.mp3"

const audioElement =  new Audio(kick);
audioElement.loop = true; 
var audioCtx = null;

const returnCurrentTime = () => audioElement.currentTime;

function App() {
  const afunc = () => {
    // audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // create gain
    const gainNode = audioCtx.createGain();

    // create source
    const source = audioCtx.createMediaElementSource(audioElement);
    source.connect(audioCtx.destination);

    // connect gain node
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = -1;
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
          <Gabriel seconds={audioCtx ? audioCtx.currentTime : 0} />
        </Route>
        <Route path="/parker">
          <Parker seconds={audioCtx ? audioCtx.currentTime : 0}/>
        </Route>
        <Route path="/angela">
          <Angela seconds={audioCtx ? audioCtx.currentTime : 0}/>
        </Route>
      </Switch>
    </div>
  );
}
export {returnCurrentTime};
export default App;
