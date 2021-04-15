import './App.css';
import React from 'react';
import Music from './Music';


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
      <div className="container">
        <div className="row">
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h1>Sounds</h1>
        <div className="row">
          <div className="col">
            {<Music color="pink" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div>
          <div className="col">
            {<Music color="green" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div><div className="col">
            {<Music color="red" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div>
          <div className="col">
            {<Music color="yellow" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div>
          <div className="col">
            {<Music color="purple" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div>
          <div className="col">
            {<Music color="orange" text="Kick" url="../public/samples/trad_kick_01_C.wav"/>}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
