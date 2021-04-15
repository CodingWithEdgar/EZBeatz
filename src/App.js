import "./App.css";
import Music from "./Music";
import gabeKick from "./samples/Gabriel Set 2/808 kick.wav";
import gabeBeep from "./samples/Gabriel Set 2/beep beep.wav";
import gabeClaps from "./samples/Gabriel Set 2/claps.wav";
import gabeShaker from "./samples/Gabriel Set 2/shaker and bell.wav";
import gabeToms from "./samples/Gabriel Set 2/toms and claps.wav";
import gabeHiHat from "./samples/Gabriel Set 2/triplet hi hats.wav";
import React, { useState, useEffect } from "react";

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
    <div className="App bg-dark container-fluid text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            EZBeatz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/samples"
                >
                  Samples and Effects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Meet the Creators
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-11"></div>
        <div className="text-light col">{seconds}s</div>
      </div>
      <h1>Click a Circle to Begin! </h1>
      <div className="row">
        <div className="col">
          {<Music seconds={seconds} audio={gabeKick} color="pink" text="Kick" />}
        </div>
        <div className="col">
          {<Music seconds={seconds} audio={gabeBeep} color="green" text="Kick" />}
        </div>
        <div className="col">
          {<Music seconds={seconds} audio={gabeClaps} color="red" text="Kick" />}
        </div>
        <div className="col">
          {<Music seconds={seconds} audio={gabeHiHat} color="yellow" text="Kick" />}
        </div>
        <div className="col">
          {<Music seconds={seconds} audio={gabeToms} color="purple" text="Kick" />}
        </div>
        <div className="col">
          {<Music seconds={seconds} audio={gabeShaker} color="orange" text="Kick" />}
        </div>
      </div>
    </div>
  );
}

export default App;
