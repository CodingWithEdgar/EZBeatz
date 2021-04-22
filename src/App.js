import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Gabriel from './Gabriel';
import Parker from './Parker';
import Angela from './Angela';
import MusicTest from './MusicTest';
import gabeKick1 from "./samples/Gabriel Set 1/808 kick.mp3";


function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // timer used for consistent sounds
  useEffect(() => {
    if (seconds === 9) {
      setSeconds(0);
    }
  }, [seconds]);

  return (
    <div>
      <div className="row">
        <div className="col-11"></div>
        <div className="text-light col">{seconds}s</div>
      </div>
      <h1>Pick a sample set above then click a circle to begin! </h1>
      <MusicTest src={gabeKick1}/>
      <MusicTest src={gabeKick1}/>
      <Switch>
        <Route path="/gabriel">
          <Gabriel seconds={seconds} />
        </Route>
        <Route path="/parker">
          <Parker seconds={seconds}/>
        </Route>
        <Route path="/angela">
          <Angela seconds={seconds}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
