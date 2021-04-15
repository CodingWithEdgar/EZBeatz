import './App.css';
import React from 'react';
import Music from './Music';
import kick from "./samples/trad_kick_01_C.wav";


function App() {

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
      <h1>Click a Circle to Begin!</h1>
      <div className="row">
        <div className="col">
          {
            <Music
              audio={kick}
              color="pink"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              audio={kick}
              color="green"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              audio={kick}
              color="red"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              audio={kick}
              color="yellow"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              audio={kick}
              color="purple"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
        <div className="col">
          {
            <Music
              audio={kick}
              color="orange"
              text="Kick"
              url="../public/samples/trad_kick_01_C.wav"
            />
          }
        </div>
      </div>
    </div>
  );
}


export default App;
